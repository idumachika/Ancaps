import React,{Component} from 'react';
import BoatIcon from '../../image/boat.png';
import Driver from '../../image/driver.png';
import Truck from '../../image/truck.png';
import History from '../../image/history.png';


class Welcome extends Component {
    shippers=()=>{

        this.props.onViewClicked('ViewShippers')
    }
    drivers=()=>{

        this.props.onViewClicked('ViewDrivers')
    }
    truckers=()=>{

        this.props.onViewClicked('ViewTruckers')
    }
    History=()=>{

        this.props.onViewClicked('ViewHistory')
    }
    render(){
        return (
            <div className="screen">
                <h1 className="welcomeTitleSmall">WELCOME TO</h1>
                <h1 className="welcomeTitle">ANCAPS DASHBOARD</h1>
                {/* <hr/> */}
                <div className="iconHolders">
                    <div>
                        <img  src={BoatIcon} alt={BoatIcon}/>
                        <p   onClick={this.shippers} className="welcomeLink">Shippers</p>
                    </div>
                    <div>
                        <img  src={Driver} alt={Driver}/>
                        <p onClick={this.drivers} className="welcomeLink">Drivers</p>
                    </div>
                    <div>
                        <img  src={Truck} alt={Truck}/>
                        <p onClick={this.truckers} className="welcomeLink">Truck Owners</p>
                    </div>
                    <div>
                        <img  src={History} alt={History}/>
                        <p onClick={this.History} className="welcomeLink">History</p>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Welcome ;