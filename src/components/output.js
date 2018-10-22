import React from 'react'


const Output =(props) => {
 
 console.log(props);

    if (this.state.props.length > 0){
        item = this.props.result.map( single => {
                return(
                <tr>
                    <td>{single.phone}</td>
                    <td>{single.firstName}</td>
                    <td>{single.lastName}</td>
                    <td>{single.password}</td>
                    <td>{single.email}</td>
                    <td>{single.address}</td>
                    <td>{single.IDType}</td>
                    <td>{single.IDNum}</td>
                </tr>
                );
            })
        } else {
        
            <tr> Loading ...</tr>
        }
        return(
            
            <Table striped bordered condensed hover>
                <th>
                    <td>Phone</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>ID Type</td>
                    <td>ID Number</td>
                </th>
            {item}
            </Table>)

    // return (
    //     <div className="showAll">
    //             {show(props)}
    //                   {/*<td>{props.handleoutput.firstName}</td>
    //                   <td>{props.handleoutput.lastName}</td>
    //                   <td>{props.handleoutput.phone}</td>
    //                   <td>{props.handleoutput.password}</td>
    //                   <td>{props.handleoutput.email}</td>
    //                   <td>{props.handleoutput.address}</td>
    //                   <td>{props.handleoutput.IDType}</td>
    //                   <td>{props.handleoutput.IDNum}</td>*/}
    //                   List
    //                   </div>
                 
    //             )
  
}  

export default Output;