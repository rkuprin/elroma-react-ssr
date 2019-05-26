import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'

const Home = () => (
  <React.Fragment>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <Header />

  </React.Fragment>
)
export default Home