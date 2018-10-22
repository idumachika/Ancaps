import React, { Component } from 'react';
// import Allusers from '../components/allUsers';

// import Output from '../components/output';
// import Shipperreg from '../components/shipperReg';
import { MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';

class Content extends Component { 

    render() {
        return (
            <div>
                <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
                    <NavDropdown eventKey="1" title="Users" id="nav-dropdown">
                        <MenuItem eventKey="1.1" href="/shipperSignup">Create NewShipper</MenuItem>
                        <MenuItem eventKey="1.2" href="/allusers">View All Shippers</MenuItem>
                        
                    </NavDropdown>
                    <NavDropdown eventKey="2" title="Drivers" id="nav-dropdown">
                        <MenuItem eventKey="2.1" href="/dispatchersignup">Create NewDriver</MenuItem>
                        <MenuItem eventKey="2.2" href="/alldrivers">View All Driver</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey="3" title="Truck Owner" id="nav-dropdown">
                        <MenuItem eventKey="3.1" href="/truckSignup">Create New TruckOwner</MenuItem>
                        <MenuItem eventKey="3.2" href="/alltruckowner">View All TruckOwner</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey="4" title="Histoy" id="nav-dropdown">
                        <MenuItem eventKey="4.1" href="/allhistory">View All History</MenuItem>
                    </NavDropdown>
                    <MenuItem eventKey="5" href="/adminSignin" title="Item">
                        Logout
                    </MenuItem>

                </Nav>
             

                
                
            </div>
        );
    }
}


export default Content;
