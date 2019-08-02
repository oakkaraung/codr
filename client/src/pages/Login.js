import React, {Component} from 'react';
import AuthService from './../components/AuthService';
import {Link} from 'react-router-dom';
import Jumbotron from '../components/Jumbotron/Jumbotron';

class Login extends Component {
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

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/profile`);
      })
      .catch(err => {
        alert(err.response.data.message)
      });
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
  };

  render() {
    return (
      <Jumbotron>
        <h1 style={{ color: "white" }}>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
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
          <br/>
          <button type="submit" className="btn btn-info">Submit</button>
        </form>
        <br/>
        <p><Link to="/signup" style={{ color: "white" }}>Go to Signup</Link></p>
        </Jumbotron>

    );
  }
}

export default Login;