import React from 'react'
import { Redirect } from 'react-router-dom'
import {getUsers, loginUser} from '../../actions/user'

import { connect } from 'react-redux'

import UserPicker from './UserPicker'

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    selectedUser: null
  };

  login = () => {
      this.props.login(this.state.selectedUser.id)
  };

  componentDidMount() {
      this.props.fetchUsers()
  }

  handleUserSelect = (k, event) => {
      this.setState({
          selectedUser: this.props.users[k]
      })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { currentUser } = this.props;

    if (currentUser) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <h3>Login as</h3>

        <UserPicker
            users={this.props.users}
            selectedUser={this.state.selectedUser}
            handleUserSelect={this.handleUserSelect}
         />
        <hr />
        <p>
            <button onClick={this.login}>Log in</button>
        </p>

      </div>
    );
  }
}

const mapStateToProps = state => ({
    users: state.users,
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => (dispatch(getUsers())),
        login: (user) => (dispatch(loginUser(user)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
