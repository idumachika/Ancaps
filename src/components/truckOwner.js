import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-material-responsive-grid';




class TruckOwnerReg extends React.Component {
    // Now, let’s initialise the state in the constructor
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            phone: '',
            email: '',
            address: '',
            noOfTrucks:'',
            IDType: '',
            IDNum: '',

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }



    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        var apiBaseUrl = 'https://ancapbooking.herokuapp.com/register/shipper';

        const { firstName, lastName, password, email, phone, address,noOfTrucks, IDType, IDNum } = this.state;
        // const { history } = this.props;
        let data = {
            firstName,
            lastName,
            password,
            email,
            phone,
            address,
            noOfTrucks,
            IDType,
            IDNum
        }


        console.log(JSON.stringify(data));
        axios.post(apiBaseUrl, data, {

            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
            }
        }).then(function (response) {
     console.log(response);
     if(response.status === 200){
         alert("Registration Completed");
      console.log("registration successfull");
     }
       else if(response.status === 404){
           alert("registration Failed, Try again");
       }
     
     })
   .catch(function (error) {
     console.log(error);
   });

    }



    render() {
        return (

            <div className="aside-right">
           <MuiThemeProvider>
                    <Grid>
                        <Row>
                            <Col md={12}>
                                <Link to="/shippersignin">
                                    <button type="button" className="btn btn-primary">
                                        Signin
                                            </button>
                                </Link>
                            </Col>
                        </Row>
                        <div>
                            <Row>
                                <Col md={12}>
                                    <h3>TRUCKOWNER'S SIGNUP</h3>
                                </Col>
                            </Row>
                            <form onSubmit={this.onSubmit} >
                                <div className="form-group phone">
                                    <Row>
                                        <Col md={6}>


                                            <TextField
                                                name="phone"
                                                value={this.state.phone}
                                                onChange={this.onChange}
                                                type="number"
                                                floatingLabelText=" Enetr Your PhoneNumber"
                                                required
                                            />


                                        </Col>

                                        <div className="form-group phone">

                                            <Col md={6}>


                                                <TextField
                                                    name="firstName"
                                                    value={this.state.firstName}
                                                    onChange={this.onChange}
                                                    floatingLabelText="First Name"
                                                    
                                                    required
                                                />


                                            </Col>
                                        </div>
                                    </Row>
                                </div>
                                <div className="form-group lname">
                                    <Row>
                                        <Col md={6}>


                                            <TextField
                                                name="lastName"
                                                value={this.state.lastName}
                                                onChange={this.onChange}

                                                floatingLabelText="Your lastName"
                                                required
                                            />

                                        </Col>


                                        <Col md={6}>


                                            <TextField
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.onChange}
                                                type="password"                                                hintText="Enter your password"
                                                floatingLabelText="Your PassWord"
                                                required
                                            />


                                        </Col>
                                    </Row>
                                </div>
                                <div className="form-group mail">
                                    <Row>
                                        <Col md={6}>


                                            <TextField
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.onChange}
                                                type="email"                                                hintText="Enter your email"
                                                floatingLabelText="Your Email"
                                                required
                                            />


                                        </Col>


                                        <Col md={6}>

                                            <TextField
                                                name="address"
                                                value={this.state.address}
                                                onChange={this.onChange}                                                hintText="Enter your Address"
                                                floatingLabelText="Your Address"
                                                required
                                            />


                                        </Col>
                                    </Row>
                                </div>
                                <div className="form-group idtype">
                                    <Row>
                                        <Col md={6}>

                                            <TextField
                                                name="IDType"
                                                value={this.state.IDType}
                                                onChange={this.onChange}                                                hintText="Enter your IDType"
                                                floatingLabelText="Your IDType"
                                                required
                                            />



                                        </Col>

                                        <Col md={6}>

                                            <TextField
                                                name="noOfTruck"
                                                value={this.state.onOfTruck}
                                                onChange={this.onChange}                                                hintText="Enter your licenseNumber"
                                                floatingLabelText="Number of Truck(s)"
                                                required
                                            />


                                        </Col>
                                    </Row>
                                   <div className="form-group idtype">
                                    <Row>
                                        <Col md={12}>

                                            <TextField
                                                name="IDType"
                                                value={this.state.IDType}
                                                onChange={this.onChange}                                                hintText="Enter your IDType"
                                                floatingLabelText="Your IDType"
                                                required
                                            />



                                        </Col>
                                        </Row>
                                        </div>

                                </div>
                                <Row>
                                    <Col md={12}>
                                        <div className="button-submit">
                                            <button type="submit" className="btn btn-primary">submit</button>
                                        </div>
                                    </Col>
                                </Row>
                            </form>


                        </div>
                    </Grid>

                </MuiThemeProvider>

            </div>


        );
    }
}
export default TruckOwnerReg;