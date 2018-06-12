import React from 'react'
import {Table} from 'react-bootstrap'
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
                <tr>
                  <td>1</td>
                  <td>Some Question</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Some Question</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Some Question</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Some Question</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Some Question</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Some Question</td>
                </tr>

              </tbody>
            </Table>

        )
    }
}

export default QuestionsTable
