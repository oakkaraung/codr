import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Col, Row, Container } from "../components/Grid";
import { Link } from 'react-router-dom';
// import About from '../components/About';
import Jumbotron from "../components/Jumbotron/Jumbotron";
import OnClickTemp from '../components/onClickTemp';
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
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              {/* eddit the jumbo */}
              <h1>What Books Should I Read?</h1>
              <div className="container Profile">
                <h1>On the profile page!</h1>
                <p>Username: {this.state.username}</p>
                <Link to="/">Go home</Link>
              </div>
            </Jumbotron>
            <OnClickTemp />
            {/* <form>
                <Input name="title" placeholder="Title (required)" onChange= {this.handleInputChange} value={this.state.title} />
                <Input name="author" placeholder="Author (required)" onChange= {this.handleInputChange} value={this.state.author}/>
                <TextArea name="synopsis" placeholder="Synopsis (Optional)" onChange= {this.handleInputChange} value={this.state.synopsis}/>
                <FormBtn onClick={this.handleSubmit}>Submit Book</FormBtn>
              </form> */}
            {/* </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Books On My List</h1>
              </Jumbotron>
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.handleDelete(book._id)}/>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )} */}
          </Col>
        </Row>
      </Container>
    );
  }

}









export default withAuth(Profile);