import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import SearchBar from "./components/SearchBar.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TicketContainer from "./components/TicketContainer.js";
import NominationList from "./components/NominationList.js";
import Modal from "react-bootstrap/Modal";
import popcorn from "./assets/images/cinema 1.png";
import noentry from "./assets/images/no-entry 1.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      nominations: [],
      nominationLimit: false,
      showSucessModal: false,
      showFullModal: false,
    };
    this.search = this.search.bind(this);
    this.nominate = this.nominate.bind(this);
    this.deleteNom = this.deleteNom.bind(this);
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
      if (newState.nominations.length === 5) {
        newState = Object.assign(
          { ...newState },
          { nominationLimit: true, showSucessModal: true }
        );
      }
      this.setState(newState);
      console.log(newState);
    } else if (this.state.nominations.length === 5) {
      var newState = Object.assign(
        { ...this.state },
        { nominationLimit: true, showFullModal: true }
      );
      this.setState(newState);
      console.log(newState);
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
        <Modal
          show={this.state.showSucessModal || this.state.showFullModal}
          onHide={() =>
            this.setState({ showSucessModal: false, showFullModal: false })
          }
          style={styles.modal}
          variant="success"
          size="lg"
        >
          <Modal.Header src={styles.modalTitle} closeButton>
            <Modal.Title>
              {this.state.showFullModal ? (
                <div>
                  <img
                    src={noentry}
                    style={styles.popcorn}
                    alt="No entry icon"
                  ></img>{" "}
                  Your Nomination List is Already Full!{" "}
                  <img
                    src={noentry}
                    style={styles.popcorn}
                    alt="No entry icon"
                  ></img>
                </div>
              ) : (
                <div>
                  <img
                    src={popcorn}
                    style={styles.popcorn}
                    alt="Popcorn icon"
                  ></img>{" "}
                  You've Successfully Nominated 5 Movies!{" "}
                  <img
                    src={popcorn}
                    style={styles.popcorn}
                    alt="Popcorn icon"
                  ></img>
                </div>
              )}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={styles.modalBody}>
            <p>
              If you want to modify your nominations, start by deleting items on
              your list.
            </p>
          </Modal.Body>
        </Modal>
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
  modal: {
    fontFamily: "Roboto Mono",
  },
  modalTitle: {
    fontSize: "15px",
  },
  modalBody: {
    fontSize: "13px",
    alignText: "center",
  },
  popcorn: {
    height: "30px",
  },
};
export default App;
