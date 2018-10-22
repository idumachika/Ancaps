import React, { Component } from 'react';
import Dashtable from '../Dashtable';
import Counter from '../Counter';
import axios from 'axios';

const tableHead = ['Phone', 'FirstName', 'LastName', 'Email', 'Address', 'Driver Lic No'];

class ViewDrivers extends Component {   

    constructor(){
        super();
        this.state = { 
            result: [],
            errorType:'isLoading'
        } 
    }
   

    componentDidMount = () =>{
        var apiBaseUrl = 'https://ancapbooking.herokuapp.com/all-driver';
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
        let resp = response.data.data;
        let errorType='';
        if(response.data.status === 201){
            this.setState({
                errorType:'unavailable'
            })
        }else if(resp.length < 1){
            this.setState({
                errorType:'isLoading'
            })
        }else{
            this.setState({
                result:resp,
                errorType:''
            })
        }
        console.log(response)
        console.log(resp)  ;
        // console.log(response.data.data.length)

        // console.log(this.state.result)
        
    }) 
    .catch(err => {
        console.log(err)
    })        
    }
    dataChanged =(value) =>{
        this.setState({
            result: value
        })
        console.log(value)
    }
    render() {
        return (
            <div className="tableHolder" >
                <h1 className="titleHead">All Drivers</h1>
                {
                    this.state.errorType === ""  &&((
                        <Counter name="Drivers" number={this.state.result.length}/>
                    ))
                }
                
                {
                    this.state.errorType === "unavailable" &&(( 
                        <p>The Table is Empty, Please add a new Driver </p>                       
                        // <div className="loader"></div> 
                    ))
                }
                {
                    this.state.errorType === "isLoading" &&((                     
                        <div className="loader"></div> 
                    ))
                }
                {
                    this.state.errorType === ""  &&((
                        <Dashtable onChanged = {this.dataChanged} editDelete={true} className="myTable" head={tableHead} body={this.state.result}  type="drivers"/>
                    ))
                }
            </div>
            
        );
    }
}

export default ViewDrivers;