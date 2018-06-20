import React from 'react'
import {Tab, Tabs, Row, Col} from 'react-bootstrap'
import QuestionsTable from './QuestionsTable'
import {connect} from 'react-redux'

import {getQuestions} from "../../actions/questions";

class QuestionsTab extends React.Component {

    componentDidMount() {
        this.props.getQuestions()
    }

    render() {
        const {ans_questions, un_ans_questions, all_questions} = this.props
        return (
            <Row className="show-grid">
                <Col xs={12} md={6} mdOffset={3}>
                    <Tabs defaultActiveKey={1} id="questions-tab">
                        <Tab eventKey={1} title="Unanswered">
                            <QuestionsTable questions={ans_questions.map(q_key => all_questions[q_key])}/>
                        </Tab>
                        <Tab eventKey={2} title="Answered">
                            <QuestionsTable questions={un_ans_questions.map(q_key => all_questions[q_key])}/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>

        )
    }

}

const mapStateToProps = (state) => ({
    ans_questions: state.questionSections.answeredQuestions,
    un_ans_questions: state.questionSections.unansweredQuestions,
    all_questions: state.questions
})

const mapDispatchToProps = (dispatch) => ({
    getQuestions: () => dispatch(getQuestions())
})


export default connect(mapStateToProps, mapDispatchToProps)(QuestionsTab)
