import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUserAction } from '../actions/index';

class UserRoute extends Component {
  componentDidMount() {
    this.props.fetchUserAction();
  }

  render() {

    return (
      <div>
        UserLists:
        <ul>
        {

          this.props.users.map( user => {
            return <li key={user.id}>{user.name}</li>
          }, () => {
            console.log("users", this.props.users)
          })
        }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.fetchUser.payload
  }
}

export const loadData = (store) => {
  return store.dispatch(fetchUserAction());
}

export default connect(mapStateToProps, { fetchUserAction } )(UserRoute);
