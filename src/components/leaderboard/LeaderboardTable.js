import React from 'react'
import {Image, Table} from 'react-bootstrap'


class LeaderboardTable extends React.Component {

    render() {
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
                  { [1,2,3,4,5].map((num) => {
                      return (
                          <tr>
                            <td>{num}</td>
                            <td><Image src='http://via.placeholder.com/100x100' circle /> </td>
                            <td>Some Name</td>
                            <td>50</td>
                            <td>20</td>
                          </tr>
                      )
                  }) }


              </tbody>
            </Table>
        )
    }
}

export default LeaderboardTable
