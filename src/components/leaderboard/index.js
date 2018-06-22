import React from 'react'
import LeaderboardTable from './LeaderboardTable'
import {Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

class LeaderboardPage extends React.Component {

    render() {
        return (
            <div className='top-buffer-50'>
                <h2>Leaderboard</h2>
                <Row>
                    <Col xs={6} xsOffset={3} md={8} mdOffset={2}>
                        <LeaderboardTable users={this.props.users}/>
                    </Col>
                </Row>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const users = Object.keys(state.users).map(k => state.users[k])
    users.sort((a,b) => {
        const a_num = Object.keys(a.answers).length + a.questions.length
        const b_num = Object.keys(b.answers).length + b.questions.length

        return a_num < b_num
    })
    return {users}
}

export default connect(mapStateToProps)(LeaderboardPage)
