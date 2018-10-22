import React from 'react';
import axios from 'axios';
// import Output from '../components/output';
import { Table } from 'react-bootstrap';


class Allusers extends React.Component {
    constructor(props) {
        super(props);
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
                          <td>{single.IDType}</td>
                           <td>{single.IDNum}</td>
                </tr>
                );  
            })    
        }
        return(
            <div>
             <Table >
                <thead>
                <tr>
                    <th>Phone</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>ID Type</th>
                    <th>ID Number</th>
                </tr>
                </thead>
                <tbody>
                {output}
                </tbody>
            </Table>
            </div>
        )
    }


    // }

// class allUsers extends React.Component {
//   constructor(){
//     super() 
//       this.state = {
//         data: []
//       }

//   }
//   componentDidMount() {
//     axios({
//        url: 'https://ancapbooking.herokuapp.com/register/shipper',
//        type: "GET",
//        dataType: 'json',
//        ContentType: 'application/json',
//        success: function(data) {
//             this.setState({data: data});
//        }.bind(this),
//        error: function(error) {
//          console.log(error);
//        }
//     })
//   }
//   render() {


//     return (
//       <table>
//       <tbody>{this.state.data.map(function(item, key) {
//               return (
//                   <tr key = {key}>
//                       <td>{item.firstName}</td>
//                       <td>{item.lastName}</td>
//                       <td>{item.phone}</td>
//                       <td>{item.password}</td>
//                       <td>{item.email}</td>
//                       <td>{item.address}</td>
//                       <td>{item.IDType}</td>
//                       <td>{item.IDNum}</td>
//                   </tr>
//                 )

//              })}</tbody>
//        </table>
//         )
//   }
// }

}


export default Allusers;
