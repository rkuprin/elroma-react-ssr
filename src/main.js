import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Loadable from 'react-loadable'
import { HelmetProvider } from 'react-helmet-async'

import { GlobalStyle } from './styles'
import App from './App'
import configureStore from './utils/configure-store'

const store = configureStore(window.__INITIAL_STATE__)

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>,
    document.getElementById('root')
  )
})