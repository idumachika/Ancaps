import React from 'react';
import '../css/App.css';
import logo from '../images/ancaps_icon.png';


const Logo = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
        </div>
    );
}

export default Logo;