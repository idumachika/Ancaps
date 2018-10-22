import React from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';


class Alldrivers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: []}
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
            console.log(resp)  ;
            this.setState({result:resp});
            console.log(this.state.result)
            
        }) 
        .catch(err => {
            console.log(err)
        })
        
        }
        

    render() {
       let output;
    //    console.log(this.state.result)
    //    console.log(this.state.result.length)
        if (this.state.result.length < 1){
            output = <tr><td>Loading ...</td></tr>            
        } else {
        output = this.state.result.map((single, idx) => {
                return(
                <tr key={idx}>
                    <td>{single.phone}</td>
                     <td>{single.firstName}</td>
                      <td>{single.lastName}</td>
                        <td>{single.email}</td>
                         <td>{single.address}</td>
                          <td>{single.DrivLicNo}</td>                         
                </tr>
                );  
            })    
        }
        return(
            <div>
             <Table >
                <thead>
                <tr>
                    <th>phone</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>address</th>
                    <th>DrivLicNo</th>                    
                </tr>
                </thead>
                <tbody>
                {output}
                </tbody>
            </Table>
            </div>
        )
    }
}


export default Alldrivers;
