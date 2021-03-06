import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'

import App from '../src/App'
import configureStore from '../src/utils/configure-store'
import { fetchDataForRender } from './fetch-data-for-render'
import { indexHtml } from './index-html'
import stats from '../build/react-loadable.json'

export const renderServerSideApp = (req, res) => {
  const store = configureStore(undefined, { logger: false })

  Loadable.preloadAll()
    .then(() => fetchDataForRender(req, store))
    .then(() => renderApp(req, res, store))
}

function renderApp(req, res, store) {
  const context = {}
  const modules = []
  const helmetContext = {}
  const markup = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <HelmetProvider context={helmetContext}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </HelmetProvider>
    </Loadable.Capture>
  );

  if (context.url) {
    res.redirect(context.url)
  } else {
    const fullMarkup = indexHtml({
      helmet: helmetContext.helmet,
      initialState: store.getState(),
      bundles: getBundles(stats, modules),
      markup
    });

    res.status(200).send(fullMarkup)
  }
}
