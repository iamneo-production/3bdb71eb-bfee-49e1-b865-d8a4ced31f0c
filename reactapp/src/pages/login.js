import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setUsername,
  setPassword,
  resetForm,
} from './loginActions';

import '../css/login.css';

function Login(props) {
  const handleUsernameChange = (e) => {
    props.setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    props.setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any login-related logic here, like dispatching login actions
    // Example: props.loginUser(props.username, props.password);
    props.resetForm();
    alert("Login Sucessfull "+props.username);
  };

  const alertMessage  = () => {
    alert("Login successfull "+props.username);
  }

  return (
    <div className="L">
      <div className="a">
        <form action="" className="form_main" onSubmit={handleSubmit}>
          <p className="heading">Login</p>
          {/* ...Rest of the JSX */}
          <input
            type="text"
            className="inputField"
            id="username"
            placeholder="Username"
            value={props.username}
            onChange={handleUsernameChange}
          ></input>
          {/* ...Rest of the JSX */}
          <input
            type="password"
            className="inputField"
            id="password"
            placeholder="Password"
            value={props.password}
            onChange={handlePasswordChange}
          ></input>
          {/* ...Rest of the JSX */}
          <Link to='/home'><button id="button" type="submit" onClick={alertMessage}>Submit</button></Link>
          {/* ...Rest of the JSX */}
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.login.username,
    password: state.login.password,
  };
};

const mapDispatchToProps = {
  setUsername,
  setPassword,
  resetForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
