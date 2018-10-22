import React from 'react';
import axios from 'axios';


class PassReset extends React.Component {
    // Now, let’s initialise the state in the constructor
    constructor() {
        super();

        this.state = {
            phone: ''
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
        const { phone} = this.state;

        let data = {
            data: {
                phone               
            }
        }
        // console.log(data)
        axios.post('https://ancapbooking.herokuapp.com/register/shipper', data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
            }
        }).then((result) => {
            //access the results here....
            alert("datasaved");
          }).catch(function (error) {
    console.log(error);
  });
      }

    render() {
        return (
            <div>
                <h4 className="mv3">PASSWORD RESET</h4>
                <form onSubmit={this.onSubmit} >                   
                    <div className="form-group">
                        <input
                            name="phone"
                            value={this.state.phone}
                            onChange={this.onChange}
                            type="number"
                            placeholder="Your PhoneNumber"
                        />
                    </div>                  
                    <div className="button-submit"> 
                        <button type="submit" className="btn btn-primary">submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PassReset;






