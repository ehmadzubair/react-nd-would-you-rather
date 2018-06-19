import React from 'react'
import LeaderboardTable from './LeaderboardTable'
import {Row, Col} from 'react-bootstrap'

class LeaderboardPage extends React.Component {

    render() {
        return (
            <div className='top-buffer-50'>
                <h2>Leaderboard</h2>
                <Row>
                    <Col xs={6} xsOffset={3} md={8} mdOffset={2}>
                        <LeaderboardTable />
                    </Col>
                </Row>

            </div>
        )
    }
}

export default LeaderboardPage
