import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import SearchBar from "./components/SearchBar.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TicketContainer from "./components/TicketContainer.js";
import NominationList from "./components/NominationList.js";
import Alert from "react-bootstrap/Alert";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      nominations: [],
      nominationLimit: false,
    };
    this.search = this.search.bind(this);
    this.nominate = this.nominate.bind(this);
    this.deleteNom = this.deleteNom.bind(this);
  }
  search(searchString) {
    if (searchString) {
      fetch(
        "http://www.omdbapi.com/?apikey=1d8b2857&type=movie&r=json&s=" +
          searchString.target.value
      )
        .then((res) => res.json())
        .then((json) => {
          var newState = json.Search
            ? Object.assign({ ...this.state }, { movies: json.Search })
            : Object.assign({ ...this.state }, { movies: [] });
          this.setState(newState);
        });
    }
  }
  nominate(movie) {
    if (
      this.state.nominations.length < 5 &&
      !this.state.nominations.some((item) => movie.imdbID === item.imdbID)
    ) {
      var newState = { ...this.state };
      newState.nominations.push(movie);
      newState.nominationLimit = false;
      this.setState(newState);
    } else if (this.state.nominations.length >= 5) {
      var newState = Object.assign(
        { ...this.state },
        { nominationLimit: true }
      );
      this.setState(newState);
    }
  }
  deleteNom(movie) {
    var newState = { ...this.state };
    var index = this.state.nominations.findIndex(
      (item) => movie.imdbID === item.imdbID
    );
    if (index !== -1) {
      newState.nominations.splice(index, 1);
      this.setState(newState);
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Container style={styles.body}>
          <Row xs={1} md={1} lg={1}>
            <SearchBar search={this.search} />
          </Row>
          {this.state.nominations.length === 5 ? (
            <Alert variant="success">
              <Alert.Heading>
                Congrats! You've Successfully Nominated 5 Movies!
              </Alert.Heading>
              <p>
                If you want to modify your nominations, start by deleting items
                to free up space on your list.
              </p>
            </Alert>
          ) : (
            <span></span>
          )}
          <Row xs={1} md={1} lg={2}>
            <Col>
              <TicketContainer
                movies={this.state.movies}
                nominate={this.nominate}
                nominations={this.state.nominations}
              />
            </Col>
            <Col>
              <NominationList
                nominations={this.state.nominations}
                deleteNom={this.deleteNom}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const styles = {
  body: {
    margin: "auto",
    paddingTop: 20,
    width: "80%",
  },
};
export default App;
