import React from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class QuestionsTable extends React.Component {

    getQuestions = () => {
        const {questions} = this.props
        return questions && questions.map((q, i) => {
            return (
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{q.optionOne.text}</td>
                    <td>{q.optionTwo.text}</td>
                    <td><Link to={`/question/${q.id}`}>View</Link></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Table striped bordered>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Option One</th>
                    <th>Option Two</th>
                    <th>Link</th>
                </tr>
                </thead>
                <tbody>
                {this.getQuestions()}
                </tbody>
            </Table>

        )
    }
}

export default QuestionsTable
