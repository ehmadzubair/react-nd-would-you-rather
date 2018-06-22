import React from 'react'
import {Row, Col, FormGroup, Button} from 'react-bootstrap'
import OptionLabel from "./OptionLabel";
import {addNewQuestion} from "../../actions/questions";
import {connect} from 'react-redux'

class AddQuestion extends React.Component {
    state = {
        optionOneValue: '',
        optionTwoValue: ''
    }

    handleOptionOneValueChange = (value) => {
        this.setState({optionOneValue: value})
    }

    handleOptionTwoValueChange = (value) => {
        this.setState({optionTwoValue: value})
    }

    handleSubmit = () => {
        const {optionOneValue, optionTwoValue} = this.state
        const {currentUser, history, addQuestion} = this.props
        addQuestion(optionOneValue, optionTwoValue, currentUser)
        history.push('/')
    }

    render() {
        return (
            <div>
                <h2> Would You Rather? </h2>
                <Row className='top-buffer-50'>
                    <Col md={6} mdOffset={3}>
                        <Row>
                            <Col md={6} mdOffset={3}>
                                <form>
                                    <FormGroup
                                        controlId='formBasicText'
                                    >
                                        <OptionLabel
                                            title='Option 1'
                                            placeholder='Yes'
                                            handleValueChange={this.handleOptionOneValueChange}
                                        />

                                        <OptionLabel
                                            title='Option 2'
                                            placeholder='No'
                                            handleValueChange={this.handleOptionTwoValueChange}
                                        />
                                    </FormGroup>

                                    <Button onClick={this.handleSubmit}>Add Question</Button>
                                </form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    addQuestion: (o1, o2, userId) => (dispatch(addNewQuestion(o1,o2,userId)))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion)
