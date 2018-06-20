import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

class PrivateRoute extends React.Component {
    render() {
        const {component: Component, currentUser, ...rest} = this.props

        const renderRoute = props => {
            if (currentUser) {
                return (
                    <Component {...props} />
                );
            }
            const to = {
                pathname: '/login',
                state: {from: props.location}
            };
            return (<Redirect to={to}/>)
            }

        return (<Route {...rest} render={renderRoute} />)
    }
}


const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(PrivateRoute)
