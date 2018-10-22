import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';



class dispatcherLogin extends React.Component {
    constructor() {
        super();

        this.state = {
            phone: '',
            password:'',
            
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
         var apiBaseUrl= 'https://ancapbooking.herokuapp.com/login/shipper';
        const { phone,password } = this.state;
        const { history } = this.props;

        let data = {
                password,
                phone
                
        }
          
          console.log(JSON.stringify(data));
        axios.post(apiBaseUrl, data,{
          data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
            }
        }).then((result) =>{
            console.log(result);
            history.push('/adminDash')
        }).catch(function (error){
            console.log('error got' + error);
        });
      }


    render() {
        return (
            <div>
            <MuiThemeProvider>
            <div className="container">            
                <Link to="/dispatchersignup">
                        <button type="button" className="btn btn-primary">
                            Creat Account
                        </button>
                    </Link>
                    <div>
                <h4 className="mv3">DISPATCHER'S LOGIN</h4>
                </div>
                <form onSubmit={this.onSubmit} >                   
                   <div className="flex flex-column">
                        <TextField
                            name="phone"
                            value={this.state.phone}
                            onChange={this.onChange}
                            type="number"
                           floatingLabelText="Enter your phonenumber"
                        />
                    </div>
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
                                      
                    <div className="button-submit"> 
                        <button type="submit" className="btn btn-primary">submit</button>
                    </div>
                </form>              
            </div>
              </MuiThemeProvider>
              </div>
        );
    }
}

export default dispatcherLogin;