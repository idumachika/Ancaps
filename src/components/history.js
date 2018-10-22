import React from 'react';
import axios from 'axios';


class shipperDash extends React.Component {
    constructor() {
        super();

        this.state = {
            history: ''

        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        let apiBaseUrl = 'https://ancapbooking.herokuapp.com/register/shipper';

        const { history } = this.props;
        let data = {
            history
        }

        console.log(JSON.stringify(data));
        axios.get(apiBaseUrl, data, {

            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h4>History</h4>
            </div>
        )
    };
}

export default History;