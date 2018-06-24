import React from 'react'
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {logoutUser} from "../actions/user";

class NavigationBar extends React.Component {

    handleLogout = () => {
        this.props.logoutUser()
    }

    render() {
        const {currentUser} = this.props
        const username = currentUser && `${currentUser.name}   `
        const logoutButton = currentUser && <Button onClick={this.handleLogout}>Logout</Button>

        return (
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
                <NavLink to='/'>Would You Rather?</NavLink>

            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
             <Navbar.Text>
                <Link to='/add'>Add Question</Link>
            </Navbar.Text>
            <Navbar.Text>
               <Link to='/leaderboard'>Leaderboard</Link>
           </Navbar.Text>
            <Navbar.Text pullRight>
                {username}
                {logoutButton}
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
    )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.users[state.currentUser]
})

export default connect(mapStateToProps, {logoutUser})(NavigationBar)

