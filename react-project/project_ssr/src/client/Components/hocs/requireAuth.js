import React from 'react'
import { connect } from 'react-redux' 
import {Redirect} from 'react-router-dom'

export default (ChildComponent) => {
   class RequireAuth extends React.Component {
       render() {
            switch(this.props.checkAuth.payload) {
                case false:
                    console.log('wews')
                    return <Redirect to={'/auth'} />
                case null:
                    console.log("null")
                    return <div>Loading...</div>
                default:
                    return <ChildComponent {...this.props} />
            }
       }
   }

   const mapStateToProps = ({ checkAuth }) => {
       return { checkAuth }
   } 

    return connect(mapStateToProps)(RequireAuth)
}