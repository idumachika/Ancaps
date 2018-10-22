import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import authentication from '../services/authentication'

class Logout extends Component{
  contextTypes={
    router:React.props.array.isRequired,
  };

  componentDidMount() {
    authentication.logout()
    this.context.router.replace('/adminSignin');
  };

  render() {
    return (
      <section className="column is-offset-6 is-6">
        <p>You are now logged out. Click <Link to="/adminSignin">here</Link> to log back in.</p>
      </section>
    )
  };
}

export default Logout
