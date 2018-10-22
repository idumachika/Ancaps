import React, { Component } from 'react';
import Menu from './Menu';
import MenuButton from './MenuButton';
import Logo from './Logo';
import {Link} from 'react-router-dom';

import shippersIcon from '../image/boat-white.png';
import driversIcon from '../image/driver-white.png';
import truckersIcon from '../image/truck-white.png';
import historyIcon from '../image/history-white.png';

class SideBar extends Component {

    // constructor(){
    //     super();
    // }

    shippers=()=>{

        this.props.onViewClicked('ViewShippers')
    }
    drivers=()=>{

        this.props.onViewClicked('ViewDrivers')
    }
    truckers=()=>{

        this.props.onViewClicked('ViewTruckers')
    }
    adddrivers=()=>{

        this.props.onViewClicked('AddDriver')
    }
    addtruckers=()=>{

        this.props.onViewClicked('AddTrucker')
    }
    paymentHistory=()=>{

        this.props.onViewClicked('ViewHistory')
    }

    render() {
        return (
            <div className="sidebar">
            <Link className=".link" to="/"><Logo/></Link>
                
                <Menu title="Shippers" icon={shippersIcon}>
                    <div onClick={this.shippers} className=".link" ><MenuButton name="View All Shippers"/></div>                    
                </Menu>
                <Menu title="Drivers" icon={driversIcon}>
                    
                    <div onClick={this.drivers} className=".link" ><MenuButton name="View All Drivers"/></div>
                    <div onClick={this.adddrivers} className=".link" ><MenuButton name="Add New Driver"/></div>
                </Menu>
                <Menu title="Truck Owners" icon={truckersIcon}>
                <div onClick={this.truckers} className=".link" ><MenuButton name="View All Truck Owners"/></div>
                <div onClick={this.addtruckers} className=".link" ><MenuButton name="Add New Truck Owner"/></div>
                </Menu>
                <Menu title="All History" icon={historyIcon}>
                <div onClick={this.paymentHistory} className=".link" ><MenuButton name="View All History"/></div>                    
                </Menu>
                <div className="logout">
                    LOG OUT
                </div>
            </div>
        );
    }
}


export default SideBar;