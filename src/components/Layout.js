import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from './SiteMetadata'
//import { withPrefix } from 'gatsby'

import NavBar from './Navbar'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <NavBar />
      <div>{children}</div>
    </div>
  )
}

export default Layout



