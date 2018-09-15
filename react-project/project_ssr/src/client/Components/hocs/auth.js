import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

export default (ChildComponent) => {
    class Auth extends React.Component {
        render() {
            switch(this.props.checkAuth.payload) {
                case false:
                    console.log('wews')
                    return <ChildComponent {...this.props} />
                case null:
                    console.log("null")
                    return <ChildComponent {...this.props} />
                default:
                    return <Redirect to="/test1" />
            }
        }
    }

    function mapStateToProps({checkAuth }) {
        return { checkAuth }
    }

    return connect(mapStateToProps)(Auth)
}