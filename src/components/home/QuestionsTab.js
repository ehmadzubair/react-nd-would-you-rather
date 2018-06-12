import React from 'react'
import {Tab, Tabs, Row, Col} from 'react-bootstrap'
import QuestionsTable from './QuestionsTable'

class QuestionsTab extends React.Component {

    render() {
        return (
            <Row className="show-grid">
                <Col xs={12} md={6} mdOffset={3}>
                    <Tabs defaultActiveKey={1} id="questions-tab">
                      <Tab eventKey={1} title="Unanswered">
                        <QuestionsTable />
                      </Tab>
                      <Tab eventKey={2} title="Answered">
                        <QuestionsTable />
                      </Tab>
                    </Tabs>
                </Col>
            </Row>

        )
    }

}

export default QuestionsTab
