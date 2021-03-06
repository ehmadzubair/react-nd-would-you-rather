import React from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getUsers} from "../../actions/user";
import {getQuestions, saveQuestionAnswer} from "../../actions/questions";
import OptionButton from './OptionButton'

import _ from 'lodash'
import {Redirect} from "react-router-dom";

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
        const {currentUser} = this.props
        const {question_id} = this.props.match.params
        this.props.saveQuestionAnswer(currentUser.id, question_id, 'optionOne')
    }

    handleOptionTwoClick = () => {
        const {currentUser} = this.props
        const {question_id} = this.props.match.params
        this.props.saveQuestionAnswer(currentUser.id, question_id, 'optionTwo')
    }

    render() {
        const {questions, users, currentUser} = this.props
        const {question_id} = this.props.match.params

        const question = questions[question_id]

        if (!question) {
            return <Redirect to={{pathname:'/notfound'}}/>
        }
        const author_key = question && question.author

        const author = users[author_key]

        const isAnswered = currentUser && Object.keys(currentUser.answers).includes(question_id)

        // TODO: Change this to use the User object
        const {answers} = currentUser
        const answerOption = answers[question_id] && answers[question_id]
        const isAnswerOptionOne = answerOption === 'optionOne'
        const isAnswerOptionTwo = answerOption === 'optionTwo'


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
                                    isAnswered={isAnswered}
                                    title={question.optionOne.text}
                                    numVotes={question.optionOne.votes.length}
                                    votePercentage={question.optionOne.votePercentage}
                                    handleClick={this.handleOptionOneClick}
                                />
                            </Col>
                            <Col md={6}>
                                <OptionButton
                                    isSelected={isAnswerOptionTwo}
                                    isAnswered={isAnswered}
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
    currentUser: state.users[state.currentUser]
})

export default connect(mapStateToProps, {getUsers, getQuestions, saveQuestionAnswer})(QuestionDetail)
