import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import UserIsAuthenticated from './src/decorators/UserIsAuthenticated';
import '../css/App.css';
// import Header from '../components/header';
import Main from '../components/main';
import ShipperReg from '../components/shipperReg';
import DispatcherReg from '../components/dispatcherReg';
// import shipperSignin from '../components/shipperSignin';
// import dispatcherLogin from '../components/dispatcherLogin';
// import shipperDash from '../components/shipperDash';
import adminSignin from '../components/adminSignin';
 import adminDash from '../components/adminDash';
// import TruckOwnerReg from '../components/truckOwner';
// import Allusers from '../components/allUsers';
// import Alldrivers from '../components/allDrivers';
// import bar from '../components/input';
// import ViewShippers from './screens/ViewShippers';



// import Logout from '../components/logout';
// import Payment from '../components/payment';

// import ResetPassword from '../components/passReset';



class App extends Component {
  render() {
    return (
      <div className="App">       
        {/* <Header />         */}
        <div 
          className="page-container">
        </div>
        <div className="ph3 pv1 background-gray">
          <Switch>


              <Route exact path="/" component={Main}/>
              <Route path="/signup" component={ShipperReg} />
                <Route path="/register" component={DispatcherReg} />
                {/*<Route exact path="/shippersignin" component={shipperSignin} />
                <Route exact path="/dispatcherLogin" component={dispatcherLogin} />*/}
                {/*<Route exact path="/shipperDash" component={shipperDash} />*/}
                <Route path="/adminSignin" component={adminSignin} />
                <Route path="/adminDash" component={adminDash} />


            {/* <Route exact path="/" component={Main} /> */}
           
            
            {/*<Route  path="/truckowner/Reg" component={TruckOwnerReg} />
            <Route  path="/allusers" component={Allusers} />
            <Route  path="/alldrivers" component={Alldrivers} />
            <Route  path="/input" component={bar}/>*/}
            {/*/>*/}

      
            {/*<Route path="/logout" component={Logout} />*/}
            {/*<Route exact path="/payment" component={Payment} />*/}
            {/*<Route exact path="/passwordreset" component={ResetPassword} />   */}
          </Switch>
        </div>        
      </div>
    );    
  }   
}


export default App;
