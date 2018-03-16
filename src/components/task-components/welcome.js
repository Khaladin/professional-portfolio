import React, {Component} from 'react';
import history from '../../history';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth_actions';

class Welcome extends Component {
//   componentDidMount() {
//     const token = localStorage.getItem('token');
//     // If we have a token, consider the user to be signed in
//     if (token) {
//       //We need to update application state
//       this.props.setAuthUser(localStorage.getItem('email'));
//       history.push('/taskapp/display-tasks');
// }
  // }
  render() {
    return (
      <div>
        <h4 className="welcome-title">Welcome to the Tasks Agenda</h4>
        <p className="welcome-text">Login, or Sign up to start!</p>
        <p className="welcome-text">
          On the inside start adding tasks you want to complete. When youre done
          with one just go ahead and delete it!
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {...state, authenticated: state.auth.authenticated};
}

export default connect(mapStateToProps, actions)(Welcome);
