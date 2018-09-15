import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {FETCH_USER_ACTION } from '../_actions/index'
import auth from '../Components/hocs/auth';

class LogInPage extends React.Component {

    constructor() {
        super()
        this.SignIn = this.SignIn.bind(this)
    }

    SignIn() {
        const data = {
            username: document.querySelector('#username').value,
            password: document.querySelector('#password').value
        }

        axios.post('/api/auth', data)
        .then(data => {
            console.log(data)
            if(data.data.success) {
                window.location ="/test1"
            }
        })
        .catch(err => console.log(err)) 

    }

    render() {
        return (
            <div id={"LogInpage"}>
                    <div>
                        <label htmlFor={"username"}>Username : </label>
                        <input type={"text"} id={"username"} name="username" placeholder="Username" />
                    </div>
                    <div>
                        <label htmlFor={"password"}>Password : </label>
                        <input type={"password"} id={"password"} name="password" placeholder="Password" />
                    </div>
                    <div>
                        <input onClick={this.SignIn} type={"submit"} value="Sign in" />
                    </div>
            </div>

        )
    }
}


const mapStateToProps = ({ checkAuth }) => {
    return {
        res: checkAuth
    }
}

export default {
    component: connect(mapStateToProps, { FETCH_USER_ACTION })(auth(LogInPage)),
    loadData: ({dispatch}) => dispatch(FETCH_USER_ACTION())
}