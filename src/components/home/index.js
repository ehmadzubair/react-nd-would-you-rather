import React from 'react'
import QuestionsTab from './QuestionsTab'
import {getQuestions} from "../../actions/questions";
import {connect} from 'react-redux'

class HomePage extends React.Component {

    componentDidMount() {
        debugger;
        this.props.getQuestions()
    }

    render() {
        return (
            <QuestionsTab />
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getQuestions: () => dispatch(getQuestions())
})


export default connect(null, mapDispatchToProps)(HomePage)
