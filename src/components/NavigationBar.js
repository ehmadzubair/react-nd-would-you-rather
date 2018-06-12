import React from 'react'
import {Navbar} from 'react-bootstrap'

class NavigationBar extends React.Component {

    render() {
        return (
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Would You Rather?</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text pullRight>
              Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
    )
    }
}

export default NavigationBar
