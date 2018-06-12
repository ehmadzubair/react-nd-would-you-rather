import React from 'react'
import fakeAuth from '../utils/AuthService'
import { Redirect } from 'react-router-dom'

import {DropdownButton, MenuItem} from 'react-bootstrap'

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    selectedUsername: 'Select User...'
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  users = [
      'User A',
      'User B',
      'User C'
  ]

  handleUserSelect = (k, event) => {
      this.setState({
          selectedUsername: this.users[k]
      })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <h3>Login as</h3>

        <DropdownButton
          bsStyle={'default'}
          title={this.state.selectedUsername}
          key={1}
          id={`split-button-basic-1`}
          onSelect={this.handleUserSelect}
          >
          <MenuItem eventKey="0">User A</MenuItem>
          <MenuItem eventKey="1">User B</MenuItem>
          <MenuItem eventKey="2">User C</MenuItem>
        </DropdownButton>
        <hr />
        <p>
            <button onClick={this.login}>Log in</button>
        </p>

      </div>
    );
  }
}


export default Login
