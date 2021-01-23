import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {

  render() {
    return(
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div>
          <Link to="/">
            Home
          </Link>
        </div>
      </nav>
    )
  }

}

export default Navbar