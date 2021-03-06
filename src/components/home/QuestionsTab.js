import React from 'react'
import {Tab, Tabs, Row, Col} from 'react-bootstrap'
import QuestionsTable from './QuestionsTable'
import {connect} from 'react-redux'

import {getQuestions} from "../../actions/questions";
import _ from 'lodash'

class QuestionsTab extends React.Component {

    componentDidMount() {
        this.props.getQuestions()
    }

    render() {
        let {ans_questions, un_ans_questions, all_questions} = this.props

        un_ans_questions = un_ans_questions.map(q_key => all_questions[q_key])
        un_ans_questions.sort((a,b) => a.timestamp < b.timestamp)

        ans_questions = ans_questions.map(q_key => all_questions[q_key])
        ans_questions.sort((a,b) => a.timestamp < b.timestamp)

        return !_.isEmpty(all_questions) && (
            <Row className="show-grid">
                <Col xs={12} md={6} mdOffset={3}>
                    <Tabs defaultActiveKey={1} id="questions-tab">
                        <Tab eventKey={1} title="Unanswered">
                            <QuestionsTable questions={un_ans_questions}/>
                        </Tab>
                        <Tab eventKey={2} title="Answered">
                            <QuestionsTable questions={ans_questions}/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>

        )
    }

}

const mapStateToProps = (state) => {
    const {users, currentUser, questions} = state
    const ans_questions = Object.keys(users[currentUser].answers)
    const un_ans_questions = Object.keys(questions).filter( x => !ans_questions.includes(x))
    return {
        ans_questions,
        un_ans_questions,
        all_questions: questions
    }
}

export default connect(mapStateToProps, {getQuestions})(QuestionsTab)
