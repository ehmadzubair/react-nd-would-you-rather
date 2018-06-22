import React from 'react'

import {DropdownButton, MenuItem} from 'react-bootstrap'


class UserPicker extends React.Component {

    handleUserSelect = (k, event) => {
        this.setState({
            selectedUser: this.props.users[k]
        })
    }

    render() {
        const {users, selectedUser, handleUserSelect} = this.props
        const title = (selectedUser && selectedUser.name) || 'Select User...'

        return (
            <DropdownButton
              bsStyle={'default'}
              title={title}
              key={1}
              id={`split-button-basic-1`}
              onSelect={handleUserSelect}
              >
              { Object.keys(users).map((key, index) => {
                  const {name, id} = users[key]
                  return <MenuItem key={index} eventKey={id}>{name}</MenuItem>
              }

              )
              }
            </DropdownButton>
        )

    }
}

export default UserPicker
