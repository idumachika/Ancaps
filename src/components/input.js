import React from 'react';
import Adminsignin from '../components/adminSignin';
import Allusers from '../components/allUsers';
import Alldrivers from '../components/allDrivers';
import { Tabs, Tab} from 'react-bootstrap';

class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      key:1
    };
  }

  handleSelect(key) {
    alert(`selected ${key}`);
    this.setState({ key });
  }

  render() {
    return (
        <div className="container-fluid">
      <Tabs 
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab"
      >
        <Tab eventKey={1} title="Home">
          
        </Tab>
        <Tab eventKey={2} title="Users">
          <Allusers/>
        </Tab>
        <Tab eventKey={3} title="Drivers">
          <Alldrivers/>
        </Tab>
        <Tab eventKey={4} title="Truck Owner's">
          Tab 3 content
        </Tab>
        <Tab eventKey={5} title="Logout">
          <Adminsignin/>
        </Tab>
      </Tabs>
      
      </div>
    );
  }
}

export default ControlledTabs;