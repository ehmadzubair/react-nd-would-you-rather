import React from 'react'
import {Row, Col, Image, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getUsers} from "../../actions/user";
import {getQuestions} from "../../actions/questions";
import OptionButton from './OptionButton'

import _ from 'lodash'

class QuestionDetail extends React.Component {

    componentDidMount() {
        const {questions, users, getQuestions, getUsers} = this.props
        if (_.isEmpty(questions)) {
            getQuestions()
        }
        if (_.isEmpty(users)){
            getUsers()
        }
    }

    handleOptionOneClick = () => {
        console.log('option one clicked')
    }

    handleOptionTwoClick = () => {
        console.log('option two clicked')
    }

    render() {
        const {questions, users, answeredQuestions, currentUser} = this.props
        const {question_id} = this.props.match.params

        const question = questions[question_id]
        const author_key = question && question.author

        const author = users[author_key]

        const isAnswered = answeredQuestions.includes(question_id)

        const isAnswerOptionOne = question && question.optionOne.votes.includes(currentUser.id)
        const isAnswerOptionTwo = question && question.optionTwo.votes.includes(currentUser.id)


        return (
            <div>
            <Row className='top-buffer-50'>
                <Col xs={10} xsOffset={1} md={6} mdOffset={3} >
                    <h2>Would You Rather?</h2>
                </Col>
            </Row>
                {question &&
                <Row>
                <Col md={4} mdOffset={4}>
                    {author && <Row>
                        <Col md={1} mdOffset={4}>
                            <Image src={author.avatarURL} circle />
                        </Col>
                        <Col md={3}>
                            {author && author.name}
                        </Col>
                    </Row>
                    }
                </Col>

                </Row>}
                {question &&
                <Row className='top-buffer'>
                    <Col md={8} mdOffset={2}>
                        <Row>
                            <Col md={6}>
                                <OptionButton
                                    isSelected={isAnswerOptionOne}
                                    isDisabled={isAnswered}
                                    title={question.optionOne.text}
                                    numVotes={question.optionOne.votes.length}
                                    votePercentage={question.optionOne.votePercentage}
                                    handleClick={this.handleOptionOneClick}
                                />
                            </Col>
                            <Col md={6}>
                                <OptionButton
                                    isSelected={isAnswerOptionTwo}
                                    isDisabled={isAnswered}
                                    title={question.optionTwo.text}
                                    numVotes={question.optionTwo.votes.length}
                                    votePercentage={question.optionTwo.votePercentage}
                                    handleClick={this.handleOptionTwoClick}
                                />
                            </Col>
                        </Row>
                    </Col>

                </Row>
                }
        </div>
        )
    }
}


const mapStateToProps = (state) => ({
    questions: state.questions,
    users: state.users,
    answeredQuestions: state.questionSections.answeredQuestions,
    currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => (dispatch(getUsers())),
        getQuestions: () => (dispatch(getQuestions()))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail)
