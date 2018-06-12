import React from 'react'
import {Row, Col, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class AddQuestion extends React.Component {
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
                                <ControlLabel>Option 1</ControlLabel>
                                <FormControl
                                    type='text'
                                    placeholder='Yes'
                                    />

                                <ControlLabel>Option 2</ControlLabel>
                                <FormControl
                                    type='text'
                                    placeholder='No'
                                    />
                                </FormGroup>

                            <Button type="submit">Add Question</Button>
                            </form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AddQuestion
