import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-material-responsive-grid';



class shipperSignin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        var apiBaseUrl = "https://ancapbooking.herokuapp.com/login/shipper";

        const { phone,password } = this.state;
        const { history } = this.props;

        let data = {
             phone,
            password
           
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
            history.push('/adminDash');
        }).catch(function (error) {
            console.log('error got' + error);
        });

        //.then(function (response) {
        //     console.log(response);
        //     if (response.data.code === 200) {
        //         console.log("Login successfull");
        //         history.push('/shipperDash');
        //     }
        //     else if (response.data.code === 204) {
        //         console.log("phone and password do not match");
        //         alert("phone and password do not match")
        //     }
        //     else {
        //         console.log("phone and password does not exists");
        //         history.push('/shippersignup')
        //     }
        // })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    }


    render() {
        return (
            <div>
            <MuiThemeProvider>
                    <div className="container">


                        <Grid>
                            <Row>
                                <Col md={12}>
                                    <Link to="/shippersignup">
                                        <button type="button" className="btn btn-primary">
                                            Create Account
                        </button>
                                    </Link>
                                </Col>
                            </Row>
                            <form onSubmit={this.onSubmit} >
                                <Row>
                                    <Col md={12}>
                                        <div className="form-group">
                                            <TextField
                                                type="number"
                                                value={this.state.firstName}
                                                floatingLabelText="Enter your phoneNumber"
                                                onChange={this.onChange}
                                                required

                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={12}>
                                        <div className="form-group">
                                            <TextField
                                                type="password"
                                                value={this.state.firstName}
                                                floatingLabelText="Enter your Password"
                                                onChange={this.onChange}
                                                required
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <div className="button-submit">
                                    <button type="submit" className="btn btn-primary">submit</button>
                                </div>
                            </form>


                        </Grid>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
// const style = {
//  margin: 15,
// };
export default shipperSignin;


