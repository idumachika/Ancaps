import React, {Component} from 'react';
import edit from '../image/edit.png';
import trash from '../image/trash.png';
import HOC from './HOC';
import DelModal from './DelModal';
import axios from 'axios';

import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-material-responsive-grid';

class Dashtable extends Component {

    constructor(props){
        super(props);

        this.state = {
            myBodyArr: [],
            delModal:false,
            delPhone:'',
            delIndex:'',
            editModal:false,
            editPhone:'',
            editIndex:'',
            firstName:'',
            lastName: '',
            password: '',
            phone: '',
            email: '',
            address: '',
            DrivLicNo: ''
        }
        this.handleDeleteAccepted = this.handleDeleteAccepted.bind(this)
    }

    componentDidMount(){
        this.setState({
            myBodyArr: this.props.body
        })
    }
    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    editCancel =() =>{
        this.setState({
            editModal:false,
            firstName:'',
            lastName: '',
            password: '',
            phone: '',
            email: '',
            address: '',
            DrivLicNo: ''
        })
    }
    onSubmitForm = () =>{
        let url = '';

        if(this.props.type === 'truckers'){
            url = 'truckers url';
        }else if(this.props.type === 'drivers'){
            url = 'https://ancapbooking.herokuapp.com/editDriver/'
        }
        axios.post(url, {
            phone: this.state.delPhone,
            firstName: this.state.firstName, 
            lastName: this.state.lastName,            
            email: this.state.email,
            address: this.state.address,
            DrivLicNo: this.state.DrivLicNo

        })        
        .then((response)=> {
            console.log(response);
            // BEGIN
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
                
                console.log(response)
                console.log(resp)  ;
                this.setState({
                    myBodyArr: resp,
                    editModal:false,
                    firstName:'',
                    lastName: '',
                    password: '',
                    phone: '',
                    email: '',
                    address: '',
                    DrivLicNo: ''
                })
                
            }) 
            .catch(err => {
                console.log(err)
            })  
            
            // END
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    handleDeleteCancelled = (value)=>{
        if(value === true){
            this.setState({
                delModal:false
            })
        }
    }
    handleDeleteAccepted = (value) =>{
        //Use the id to delete from database
        let url=''
        // console.log('Deleted Id '+ bodyField._id);

        if(this.props.type === 'truckers'){
            url = 'truckers url';
        }else if(this.props.type === 'drivers'){
            url = 'https://ancapbooking.herokuapp.com/deleteDriver';
        }

        axios.post(url, {
            phone: this.state.delPhone,

        })
        .then((response)=> {
            console.log(response);
            if(response.status === 200){
                this.props.body.splice(this.props.body.indexOf(this.state.delIndex), 1)
                console.log('new array is ' + this.props.body)
            }
            this.setState({
                // myBodyArr: this.props.body,
                delModal: false
            })
            this.props.onChanged(this.props.body)
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    render(){
    
        const newArr = [];
    
        return (
            <div className="tableCover">
            {
                this.state.delModal === true && (( 
                    <DelModal  delTitle="Delete Confirm" delMessage="Are you sure you want to Delete?" modalCancelled={this.handleDeleteCancelled} modalAccepted={this.handleDeleteAccepted}/>
                ))
            }
            {
                this.state.editModal === true && (( 
                <div className="myModal">
                <MuiThemeProvider>
                    <div className="dispatcherReg">
                        <Grid>
                        <div>
                            
                            </div>
                            <form onSubmit={this.onSubmit} >
                                <Row>
                                    <Col md={6}>
                                        <div className="flex flex-column">

                                            <TextField
                                                name="firstName"
                                                value={this.state.firstName}
                                                onChange={this.onChange}
                                                floatingLabelText="Enter your firstName"
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="flex flex-column">
                                            <TextField
                                                name="lastName"
                                                value={this.state.lastName}
                                                onChange={this.onChange}
                                                floatingLabelText="Enter your lastName"
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    {/* <Col md={6}>
                                        <div className="flex flex-column">
                                            <TextField
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.onChange}
                                                type="password"
                                                floatingLabelText="Enter your password"
                                                required
                                            />
                                        </div>
                                    </Col> */}
                                    {/*<Col >
                                        <div className="flex flex-column">
                                            <TextField
                                                name="phone"
                                                value={this.state.phone}
                                                onChange={this.onChange}
                                                type="number"
                                                floatingLabelText="Enter your phoneNumber"
                                                required
                                            />
                                        </div>
                                    </Col>*/}
                                </Row>
                                <Row>
                                    {/*<Col md={6}>
                                        <div className="flex flex-column">
                                            <TextField
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.onChange}
                                                type="email"
                                                floatingLabelText="Enter your email"
                                                required
                                            />
                                        </div>
                                    </Col>*/}
                                    <Col md={6}>
                                        <div className="flex flex-column">
                                            <TextField
                                                name="address"
                                                value={this.state.address}
                                                onChange={this.onChange}
                                                floatingLabelText="Enter your address"
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                {/*<Row>
                                    <Col md={6}>
                                        <div className="flex flex-column">
                                            <TextField
                                                name="DrivLicNo"
                                                value={this.state.DrivLicNo}
                                                onChange={this.onChange}
                                                floatingLabelText="Enter your DriverLicenseNumber"
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>*/}
                                <Row>
                                    <Col md={6}>
                                        <div className="button-submit">
                                            <p  className="btn btn-primary" id="driverbutton" onClick={this.onSubmitForm}>submit</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="button-submit">
                                            <p  className="btn btn-primary" id="driverbutton" onClick={this.editCancel}>Cancel</p>
                                        </div>
                                    </Col>
                                </Row>
                            </form>

                        </Grid>
                    </div>
                </MuiThemeProvider>
            </div>
                ))
            }
            <table className="table">
                <thead>
                    <tr>
                    {
                        this.props.head.map((field, index)=>(
                            <th className="th" key={index}>{field}</th>
                        ))
                    }   
                    {
                       this.props.editDelete === true && ((
                           <HOC>
                               <th className="th"></th>
                                <th className="th"></th>
                           </HOC>                        
                       ))
                    }
                                 
                    </tr>
                </thead>
                
                <tbody >
                
                {                    
                    this.state.myBodyArr.map((bodyField, index)=>{                   
                        if(this.props.type === "shippers"){
                            newArr.push({
                                phone: bodyField.phone,
                                firstName: bodyField.firstName,
                                lastName: bodyField.lastName,
                                email: bodyField.email,
                                address: bodyField.address,
                                IDType: bodyField.IDType,
                                IDNum: bodyField.IDNum,
                                
                            })
                        }
                        if(this.props.type === "drivers"){
                            newArr.push({
                                phone: bodyField.phone,
                                firstName: bodyField.firstName,
                                lastName: bodyField.lastName,
                                email: bodyField.email,
                                address: bodyField.address,
                                DrivLicNo: bodyField.DrivLicNo,
                                
                            })
                        }
                        if(this.props.type === "truckers"){
                            newArr.push({
                                phone: bodyField.phone,
                                firstName: bodyField.firstName,
                                lastName: bodyField.lastName,
                                email: bodyField.email,
                                address: bodyField.address,
                                NumOfTrucks: bodyField.NumOfTrucks,
                                IDType: bodyField.IDType,
                                IDNum: bodyField.IDNum,
                                
                            })
                        }
                        if(this.props.type === "payment"){
                            newArr.push({
                                phone: bodyField.phone,
                                firstName: bodyField.firstName,
                                lastName: bodyField.lastName,
                                email: bodyField.email,
                                amount: bodyField.amount,
                                date: bodyField.date,
                                destination: bodyField.destination,
                                distance: bodyField.distance,
                                origin: bodyField.origin,
                                payment_For: bodyField.payment_For,
                                payment_Id: bodyField.payment_Id,
                                time: bodyField.time,

                            })

                        }

                        console.log(newArr);

                        return(                    
                        <tr key={index}>
                        
                            {                            
                                Object.values(newArr[index]).map((tdData,index)=>{                                
                                return(
                                            <td key={index}>{tdData}</td>                                    
                                    )
                                })
                            }
                            {
                                this.props.editDelete === true && ((
                                    <HOC>
                                        <td><img className="ico" src={edit}  alt="edit" onClick={
                                            (handleEditAccepted) =>{
                                                this.setState({
                                                    editModal:true,
                                                    editPhone: bodyField.phone,
                                                    editIndex: index
                                                })
                                                console.log(bodyField.phone)
                                                 //Use the id to edit from database
                                                let url=''
                                                // console.log('Edited Id '+ bodyField._id);
                                        
                                                if(this.props.type === 'truckers'){
                                                    url = 'Editing from truckers table';
                                                }else if(this.props.type === 'drivers'){
                                                    url = 'https://ancapbooking.herokuapp.com/finddriver/'+ bodyField.phone;
                                                }

                                                console.log(this.state.editPhone)
                                        
                                                axios.get(url, {
                                                    headers: {
                                                        'Accept': 'application/json',
                                                        'Content-Type': 'application/json',
                                                        'Access-Control-Allow-Origin': '*',
                                                        'Access-Control-Allow-Credentials': true,
                                                        'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
                                                    }                                                    
                                                })
                                                .then((response)=> {
                                                    console.log(response);
                                                    let data = response.data.doc[0];
                                                    this.setState({
                                                        firstName:data.firstName,
                                                        lastName: data.lastName,
                                                        password: data.password,
                                                        phone: data.phone,
                                                        email: data.email,
                                                        address: data.address,
                                                        DrivLicNo: data.DrivLicNo
                                                    })

                                                })
                                                .catch(function (error) {
                                                    console.log(error);
                                                });
                                            }
                                        }/></td>

                                        <td><img className="ico" src={trash}  alt="delete" onClick={()=>{

                                            this.setState({
                                                delModal:true,
                                                delPhone: bodyField.phone,
                                                delIndex: index
                                            })

                                        }}/></td>
                                    </HOC>
                                ))
                            }
                            
                        
                        </tr>
                        
                        )
                    })
                }
                
                </tbody>
            
            </table>
            </div>
        );
    }
}

export default Dashtable;