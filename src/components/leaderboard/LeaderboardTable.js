import React from 'react'
import {Image, Table} from 'react-bootstrap'


class LeaderboardTable extends React.Component {

    render() {
        const {users} = this.props
        return (
            <Table striped bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Questions Asked</th>
                  <th>Questions Answered</th>
                </tr>
              </thead>
              <tbody>
                  { users.map((user, index) => {
                      return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td><Image src='http://via.placeholder.com/50x50' circle /> </td>
                            <td>{user.name}</td>
                            <td>{user.questions.length}</td>
                            <td>{Object.keys(user.answers).length}</td>
                          </tr>
                      )
                  }) }


              </tbody>
            </Table>
        )
    }
}

export default LeaderboardTable
