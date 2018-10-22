import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-material-responsive-grid';





class DispatcherReg extends React.Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            phone: '',
            email: '',
            address: '',
            DrivLicNo: ''
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
        document.getElementById("buttondriver").innerHTML = "signing you up...";
        e.preventDefault();
        var apiBaseUrl = 'https://ancapbooking.herokuapp.com/register/driver';
        // get our form data out of state
        const { firstName, lastName, email, phone, password, address, DrivLicNo } = this.state;
        // const { history } = this.props;
        let data = {
            firstName,
            lastName,
            password,
            email,
            phone,
            address,
            DrivLicNo
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
                alert("Registration Completed ");
                document.getElementById("buttondriver").innerHTML = "success";
           

            }
            else if(result.data.status === 400){
                alert("Validation Error,Try again");
                document.getElementById("buttondriver").innerHTML = "Failed,try again...";
            }
            
        }).catch(function (error) {
            alert("failed to complete");
            document.getElementById("buttondriver").innerHTML = "Failed,try again...";
            console.log('error got' + error);
        });
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="dispatcherReg">
                        
                        <Grid>
                        <div>
                            <Row>
                                <Col md={12}>
                                    <h3>DISPATCHER'S SIGNUP</h3>
                                </Col>
                            </Row>
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
                                    <Col md={6}>
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
                                    </Col>
                                    <Col md={6}>
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
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
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
                                    </Col>
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

                                <Row>
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
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className="button-submit">
                                            <button type="submit" className="btn btn-primary" id="buttondriver">submit</button>
                                        </div>
                                    </Col>
                                </Row>
                            </form>

                        </Grid>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default DispatcherReg;