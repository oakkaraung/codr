import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './../components/AuthService';
import API from './../utils/API';
import Jumbotron from '../components/Jumbotron/Jumbotron';

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(this.state.username, this.state.email, this.state.password)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        this.props.history.replace('/login');
      })
      .catch(err => alert(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <Jumbotron>
        <h1 style={{ color: "white" }}>Signup</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="username" style={{ color: "white" }}>Username:</label>
            <input className="form-control mx-auto"
              placeholder="Username goes here..."
              name="username"
              type="text"
              id="username"
              onChange={this.handleChange} 
              style={{ width: 500}}/>
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ color: "white" }}>Email address:</label>
            <input className="form-control mx-auto"
              placeholder="Email goes here..."
              name="email"
              type="email"
              id="email"
              onChange={this.handleChange} 
              style={{ width: 500}}/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd" style={{ color: "white" }}>Password:</label>
            <input className="form-control mx-auto"
              placeholder="Password goes here..."
              name="password"
              type="password"
              id="pwd"
              onChange={this.handleChange} 
              style={{ width: 500}}/>
          </div>
          <br />
          <button type="submit" className="btn btn-info">Submit</button>
        </form>
        <br />
        <p><Link to="/login" style={{ color: "white" }}>Go to Login</Link></p>
      </Jumbotron>
    );
  }
}

export default Signup;