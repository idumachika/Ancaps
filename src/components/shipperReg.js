import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-material-responsive-grid';


class ShipperReg extends React.Component {
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
                    document.getElementById("buttonShipper").innerHTML = "signing you up...";
        // get our form data out of state
        var apiBaseUrl = 'https://ancapbooking.herokuapp.com/register/shipper';

        const { firstName, lastName, password, email, phone, address, IDType, IDNum } = this.state;
        const { history } = this.props;
        let data = {
            firstName,
            lastName,
            password,
            email,
            phone,
            address,
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
        }).then((result) => {

            //access the results here....
            // alert(result);
            console.log(result);
            if(result.data.status === 200){
                console.log(result);
                alert("Registration Complete, Please Download App to Login");
                document.getElementById("buttonShipper").innerHTML = "success";
                history.push("/");
            }
            else if(result.data.status === 400){
                alert("Validation Error,Please try again");
                document.getElementById("buttonShipper").innerHTML = "failed try again...";
            }
        }).catch(function (error) {
            alert("failed to complete");
            document.getElementById("buttonShipper").innerHTML = "failed try again...";
            console.log('error got' + error);
        });   
    }


    render() {
        return (
            <div className="aside-right">
           <MuiThemeProvider>
                    <Grid>
                        
                        <div>
                            <Row>
                                <Col md={12}>
                                    <h3>SHIPPER'S SIGNUP</h3>
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
                                                name="IDNum"
                                                value={this.state.IDNum}
                                                onChange={this.onChange}                                                hintText="Enter your licenseNumber"
                                                floatingLabelText="Your licenseNumber"
                                                required
                                            />
                                        </Col>
                                    </Row>
                                </div>
                                <Row>
                                    <Col md={12}>
                                        <div className="button-submit">
                                            <button type="submit" className="btn btn-primary" id="buttonShipper">submit</button>
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

export default ShipperReg;