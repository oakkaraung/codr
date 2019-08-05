import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
import API from '../../utils/API';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

class Navbar extends Component {
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
                console.log(this.props);
                // once user is logged in
                // take them to their profile page
                this.props.history.replace(`/profile`);
                // return <Redirect to='/profile'  />

            })
            .catch(err => {
                console.log(err);
                alert(err)
            });
    };

    handleSignupSubmit = event => {
        event.preventDefault();
        API.signUpUser(this.state.username, this.state.email, this.state.password)
          .then(res => {
            this.Auth.login(this.state.email, this.state.password)
            // once the user has signed up
            // send them to the main page
                .then(res => {
                    this.props.history.replace('/profile');
                })
          })
          .catch(err => alert(err));
      };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    showNavigation = () => {
        if (this.Auth.loggedIn()) {
            return (
                <nav className=" navbar-nav navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Templates</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/AboutUs">About Us</Link>
                        </li>    
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                            <a className="nav-link" href="/" onClick={() => this.Auth.logout()}>Logout</a>
                        </li>
                    </ul>
                </nav>
            );
        } else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" id="PopoverLegacyOne">Signup</Link>
                        <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacyOne">
                            <PopoverHeader>Sign Up!</PopoverHeader>
                            <PopoverBody>
                                <form onSubmit={this.handleSignupSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="username">Username:</label>
                                        <input className="form-control"
                                            placeholder="Username goes here..."
                                            name="username"
                                            type="text"
                                            id="username"
                                            onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address:</label>
                                        <input className="form-control"
                                            placeholder="Email goes here..."
                                            name="email"
                                            type="email"
                                            id="email"
                                            onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password:</label>
                                        <input className="form-control"
                                            placeholder="Password goes here..."
                                            name="password"
                                            type="password"
                                            id="pwd"
                                            onChange={this.handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </PopoverBody>
                        </UncontrolledPopover>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" id="PopoverLegacy" to="/">Login</Link>
                        <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
                            <PopoverHeader>Log Back In!</PopoverHeader>
                            <PopoverBody>
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address:</label>
                                        <input className="form-control"
                                            placeholder="Email goes here..."
                                            name="email"
                                            type="email"
                                            id="email"
                                            onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password:</label>
                                        <input className="form-control"
                                            placeholder="Password goes here..."
                                            name="password"
                                            type="password"
                                            id="pwd"
                                            onChange={this.handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                                {/* <p><Link to="/signup">Go to Signup</Link></p> */}
                            </PopoverBody>
                        </UncontrolledPopover>
                    </li>
                </ul>
            );
        }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container">
                    <Link className="navbar-brand" to="/">Codr</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        {this.showNavigation()}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;