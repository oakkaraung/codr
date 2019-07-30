import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
// import { Col, Row, Container } from "../components/Grid";
import { Link } from 'react-router-dom';
// import About from '../components/About';
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Card from '../components/Card';
import Footer from '../components/Footer/Footer'
//------------------------------------
// THIS IS OUR TEMPLATE PAGE
//------------------------------------

class Profile extends Component {

  state = {
    username: "",
    email: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });
  }

  render() {
    return (<div>
      <Jumbotron>
        <h1>Welcome to Codr!</h1>
        <div className="container Profile">
          <h1>Choose a Template {this.state.username}!</h1>
        </div>
        <Card />
      </Jumbotron>
      <Footer>
        <Link to="/">Go home</Link>
      </Footer>
    </div>
    );
  }

}


export default withAuth(Profile);