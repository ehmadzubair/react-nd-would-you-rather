import React from 'react'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class QuestionsTable extends React.Component {
    render() {
        return (
            <Table striped bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Question Title</th>
                </tr>
              </thead>
              <tbody>
                  { [1,2,3,4,5].map((num) => {
                      return (
                          <tr>
                            <td>{num}</td>
                            <td><Link to={`/question/${num}`}> Some Question</Link></td>
                          </tr>
                      )
                  }) }


              </tbody>
            </Table>

        )
    }
}

export default QuestionsTable
