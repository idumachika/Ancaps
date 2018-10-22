import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../css/App.css';
import logo from '../images/ancaps_icon.png';
import pix from '../images/download-app.svg';
import photo from '../images/download-app-android.png';


class Main extends Component {

  render() {
    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="logo">
          <img src={logo}  alt="logo"/>
        </div>
        <div className="App-main">

          <div>
            <h2 className="h2">Hire!</h2>
            <p className="p">get it delivered with no sweat</p>
          </div>
          <div className="shipdispatch">
            <span className="shipper">
              <Link to="/signup">
                <button type="button" className="btn-orange">
                  Shipper
                </button>
              </Link>
            </span>
            <span className="dispatcher">
              <Link to="/register">
                <button type="button" className="btn-green">
                  Dispatcher
                </button>
              </Link>
            </span>
          </div>
        </div>
        <div className="section">
          <p className="downloadApp">Download App to Login</p>
          <Link to="">
            <img src={photo}  alt="downloadApp"/>
          </Link>
          <Link to="">
            <img src={pix} alt="downloadAndriod" />
          </Link>
        </div>
      </div>
    )
  }
}


export default withRouter(Main);