import React, { Component } from 'react';
import SideBar from './SideBar';
import {Route} from 'react-router-dom';
import Welcome from './screens/Welcome';
import ViewShippers from './screens/ViewShippers';



class Layout extends Component {

  render() {

    return ( 
      <div>
        <SideBar/>
        <Route exact path="/" component={Welcome}/>
        <Route  path="/ViewShippers" render={()=> (
          <div className="screen">
            <ViewShippers/>
          </div>        
        )}/>
      </div>      
    );
  }
}



export default Layout;
