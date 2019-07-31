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
        <br /><br />
        <h1 style={{color:"white"}}>Welcome to Codr</h1>
        <div className="container Profile">
          <h1 style={{color:"white"}}>Choose a Template <b style={{color:"lightblue"}}>{this.state.username}</b>!</h1>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <button type="button" className="btn btn-primary">View Templates</button>
      </Jumbotron>
      <Card />
      <Footer>
        <Link to="/">Go home</Link>
      </Footer>
    </div>
    );
  }

}


export default withAuth(Profile);