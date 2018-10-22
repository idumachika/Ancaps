import React, { Component } from 'react';
import Dashtable from '../Dashtable';
import Counter from '../Counter';
import axios from 'axios';

const tableHead = ['Phone', 'FirstName', 'LastName', 'Email', 'Address', 'ID Type', 'ID Number'];

class ViewShippers extends Component {   

    constructor(){
        super();
        this.state = { result: []} 
    }

    componentDidMount = () =>{
        var apiBaseUrl = 'https://ancapbooking.herokuapp.com/all-shippers';
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
                <h1 className="titleHead">All Shippers</h1>
                <Counter name="Shippers" number={this.state.result.length}/>
                
                {
                    this.state.result.length < 1 &&((                        
                        <div className="loader"></div> 
                    ))
                }
                {
                    this.state.result.length > 0 &&((
                        <Dashtable className="myTable" head={tableHead} body={this.state.result} type="shippers"/>
                   
                    ))
                }
                
            
           
            </div>
            
        );
    }
}

export default ViewShippers;