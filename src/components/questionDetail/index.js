import React from 'react'
import {Row, Col, Image, Button} from 'react-bootstrap'

class QuestionDetail extends React.Component {
    render() {
        return (
            <div>
            <Row className='top-buffer-50'>
                <Col xs={10} xsOffset={1} md={6} mdOffset={3} >
                    <h2>Would You Rather?</h2>
                </Col>
            </Row>
            <Row>
                <Col md={4} mdOffset={4}>
                    <Row>
                        <Col md={1} mdOffset={4}>
                            <Image src="http://via.placeholder.com/30x30" circle />
                        </Col>
                        <Col md={3}>
                            Ehmad Zubair
                        </Col>
                    </Row>
                </Col>

            </Row>
            <Row className='top-buffer'>
                <Col md={2} mdOffset={5}>
                    <Row>
                        <Col md={6}>
                            <Button bsStyle='primary' bsSize='large'> Option 1 </Button>
                            <p>6 votes, 30%</p>
                        </Col>
                        <Col md={6}>
                            <Button  bsSize='large'> Option 2 </Button>
                            <p>14 votes, 70%</p>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </div>
        )
    }
}

export default QuestionDetail
