import React from 'react'
import {Navbar} from 'react-bootstrap'
import fakeAuth from '../utils/AuthService'
import {NavLink} from 'react-router-dom'

class NavigationBar extends React.Component {

    render() {
        const {isAuthenticated} = this.props
        return (
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
                <NavLink to='/'>Would You Rather?</NavLink>

            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text pullRight>
                {isAuthenticated ? ('Authenicated') : ('UnAuth')}
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
    )
    }
}

export default NavigationBar



// const AuthButton = withRouter(
//   ({ history }) =>
//     fakeAuth.isAuthenticated ? (
//       <p>
//         Welcome!{" "}
//         <button
//           onClick={() => {
//             fakeAuth.signout(() => history.push("/"));
//           }}
//         >
//           Sign out
//         </button>
//       </p>
//     ) : (
//       <p>You are not logged in.</p>
//     )
// );
