import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import SearchBar from "./components/SearchBar.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TicketContainer from "./components/TicketContainer.js";
import NominationList from "./components/NominationList.js";
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
          console.log(JSON.stringify(json));
          this.setState(newState);
        });
    }
  }
  nominate(movie) {
    //if (e.target.value) {
    //const movie = e.target.value;
    if (this.state.nominations.length < 5) {
      var newState = { ...this.state };
      newState.nominations.push(movie);
      newState.nominationLimit = false;
      this.setState(newState);
    } else {
      var newState = Object.assign(
        { ...this.state },
        { nominationLimit: true }
      );
      this.setState(newState);
    }
    //}
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Container style={styles.body}>
          <Row xs={1} md={1} lg={1}>
            <SearchBar search={this.search} />
          </Row>
          <Row xs={1} md={1} lg={2}>
            <Col>
              <TicketContainer
                movies={this.state.movies}
                nominate={this.nominate}
              />
            </Col>
            <Col>
              <NominationList nominations={this.state.nominations} />
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
