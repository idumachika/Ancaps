import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Logo from '../images/ancaps_icon.png';



class Header extends Component {

  render() {

    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="App-header">
          <span className="logo">
            <Link to="/" className="ml1 no-underline black">
              <img src={Logo} className="App-logo" alt="logo"/>
            </Link>
          </span>
        </div>
      </div>
       
    )
  }
}


export default withRouter(Header);