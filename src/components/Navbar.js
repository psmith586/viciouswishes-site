import React from 'react'
//import PropTypes from 'prop-types'
import { ResponsiveLogoNavBar } from 'gatsby-ui-components'

import logo from '../../static/img/logo.jpg'

const NavBar = () => {
  
  let links = [{
    'title': 'home',
    'link': 'home'
  },
  {
    'title': 'events',
    'link': 'events'
  },
  ]

  return(
    <div>
      <ResponsiveLogoNavBar links={links} logo={logo} />
    </div>
  )
}

export default NavBar