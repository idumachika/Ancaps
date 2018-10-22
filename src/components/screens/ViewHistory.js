import React, { Component } from 'react';
import Dashtable from '../Dashtable';
import Counter from '../Counter';
import axios from 'axios';

const tableHead = ['Phone', 'FirstName', 'LastName', 'Email', 'Amount', 'Destination', 'Distance', 'Origin', 'Date', 'Payment For', 'Payment ID', 'Time'];

class ViewHistory extends Component {   

    constructor(){
        super();
        this.state = { result: [], errorMessage:false} 
    }

    componentDidMount = () =>{
        var apiBaseUrl = 'https://ancapbooking.herokuapp.com/paymenthistory';
        axios.get(apiBaseUrl, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
        }
    })
    .then((response) =>{
        console.log(response.data)
        if(response.data.status === 201 ){
            this.setState({
                errorMessage: true
            })
        }
        let resp = response.data.data;
        console.log(resp)  ;
        // console.log(response.data.data.length)
        this.setState({result:resp});
        // console.log(this.state.result)
        
    }) 
    .catch(err => {
        console.log(err)
    })        
    }

    render() {
        return (
            <div className="tableHolder">
                <h1 className="titleHead">All History</h1>
                <Counter name="paymentHistory" number={this.state.result.length}/>
                {
                    this.state.errorMessage && ((
                        <div > Nothing To Show Here</div> 
                    ))
                }
                {
                    this.state.result.length < 1 &&((
                        <div className="loader"> </div> 
                    ))
                }
                {
                    this.state.result.length > 0 &&((
                        <Dashtable className="myTable" head={tableHead} body={this.state.result}  type="paymentHistory"/>
                    ))
                }
                
            </div>
            
        );
    }
}

export default ViewHistory;