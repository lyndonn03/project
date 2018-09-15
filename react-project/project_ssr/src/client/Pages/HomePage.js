import React from 'react'
import { connect } from 'react-redux'
import { FETCH_USER_ACTION } from '../_actions/index'
import requireAuth from '../Components/hocs/requireAuth'

class HomePage extends React.Component {
    componentDidMount() {
         this.props.FETCH_USER_ACTION()
    }

    renderUser() {
         return this.props.res ? this.props.res["acc_user"] : ''
    }

    render() {
        return (
            <div>
                <p>Welcome, <strong>{this.renderUser()}</strong></p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        res: state.checkAuth.payload
    }
}

const loadData = ({dispatch}) => {
    console.log("loadDAta")
    return dispatch(FETCH_USER_ACTION())
}
export default {
    component: connect(mapStateToProps, { FETCH_USER_ACTION })(requireAuth(HomePage)),
    loadData
}