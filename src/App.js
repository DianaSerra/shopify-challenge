import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import SearchBar from "./components/SearchBar.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchResultContainer from "./components/SearchResultContainer.js";
import NominationList from "./components/NominationList.js";
import ListFullModal from "./components/ListFullModal.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      nominations: JSON.parse(localStorage.getItem("nominations")) || [],
      nominationLimit: false,
      showSuccessModal: false,
      showFullModal: false,
      searchInput: "",
    };
    this.onChangeSearchText = this.onChangeSearchText.bind(this);
    this.search = this.search.bind(this);
    this.nominate = this.nominate.bind(this);
    this.deleteNom = this.deleteNom.bind(this);
    this.closeListFull = this.closeListFull.bind(this);
  }
  search(searchString) {
    if (searchString) {
      fetch(
        "https://www.omdbapi.com/?apikey=1d8b2857&type=movie&r=json&s=" +
          searchString.target.value
      )
        .then((res) => res.json())
        .then((json) => {
          var newState = json.Search
            ? Object.assign(
                { ...this.state },
                { movies: json.Search, searchInput: searchString.target.value }
              )
            : Object.assign(
                { ...this.state },
                { movies: [], searchInput: searchString.target.value }
              );
          this.setState(newState);
          console.log(newState);
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
      if (newState.nominations.length === 5) {
        newState = Object.assign(
          { ...newState },
          { nominationLimit: true, showSuccessModal: true }
        );
      }
      this.setState(newState, () => {
        localStorage.setItem(
          "nominations",
          JSON.stringify(this.state.nominations)
        );
      });
    } else if (this.state.nominations.length === 5) {
      var newState = Object.assign(
        { ...this.state },
        { nominationLimit: true, showFullModal: true }
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
      this.setState(newState, () => {
        localStorage.setItem(
          "nominations",
          JSON.stringify(this.state.nominations)
        );
      });
    }
  }
  closeListFull() {
    this.setState({ showSuccessModal: false, showFullModal: false });
  }
  onChangeSearchText(val) {
    this.setState({ searchInput: val });
    this.search(val);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Container style={styles.body}>
          <Row xs={1} md={1} lg={1}>
            <SearchBar
              search={this.search}
              onChangeSearchText={this.onChangeSearchText}
            />
          </Row>
          <Row xs={1} md={1} lg={2} style={{ justifyContent: "center" }}>
            <Col>
              <SearchResultContainer
                movies={this.state.movies}
                nominate={this.nominate}
                nominations={this.state.nominations}
                searchInput={this.state.searchInput}
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
        <ListFullModal
          closeListFull={this.closeListFull}
          showSuccessModal={this.state.showSuccessModal}
          showFullModal={this.state.showFullModal}
        />
        <footer style={styles.footer}>
          <div style={{ fontFamily: "Roboto Mono", fontSize: 11 }}>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </footer>
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
  footer: {
    paddingTop: "40px",
    bottom: 0,
    alignText: "center",
  },
};
export default App;
