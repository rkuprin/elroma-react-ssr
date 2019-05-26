import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Helmet from 'react-helmet'

import Loading from './components/Loading'
import * as metadata from './metadata'

const LoadableHome = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading
})


const App = () => (
  <div className="app">
    <Helmet
      title={metadata.title}
      meta={metadata.meta}
      link={metadata.link}
      script={metadata.script}
      noscript={metadata.noscript}
    />

    <div className="main">
      <Switch>
        <Route exact path="/" component={LoadableHome} />
      </Switch>
    </div>

  </div>
)

export default App
