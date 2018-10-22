import React, { Component } from 'react';


class shipperDash extends Component {

    render() {
        return (
            <div>
                <section id="main">
                   <div className="row">
                        <div className="col-md-3">
                            <div className="list-group">
                                <a href="/adminDash" className="list-group-item active" id="main-color-bg">
                                    <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>Dashboard</a>
                                <a href="/allusers" className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>History</a>
                                <a href="/dispatchersignup" className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>Logout</a>

                            </div>
                        </div>
                    </div>
                </section>
                <footer id="footer">
                    <p>Copyright nHub Nigeria, &copy; 2018</p>
                </footer>
            </div>
        );
    }
}


export default shipperDash;
