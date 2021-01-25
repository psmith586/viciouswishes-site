import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {

  render() {
    return(
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-start">
          <Link className="navbar-item has-text-centered" to="/">
            Home
          </Link>
          <Link className="navbar-item has-text-centered" to="/events">
            Events
          </Link>
        </div>
      </nav>
    )
  }

}

export default Navbar