import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <nav className="ui pointing menu">
        <Link to="/" className="item active">
          Home
        </Link>
        <Link to="/" className="item">
          Feeds
        </Link>
        <Link to="/" className="item">
          Profile
        </Link>
        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
          <div className="item">
            Login
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar