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
        const {currentUser, history, postAQuestion} = this.props
        postAQuestion(optionOneValue, optionTwoValue, currentUser.id)
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

const mapDispatchToProps = (dispatch) => {
    return {
        postAQuestion: (o1, o2, user_id) => {
            debugger;
            return dispatch(addNewQuestion(o1, o2, user_id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion)
