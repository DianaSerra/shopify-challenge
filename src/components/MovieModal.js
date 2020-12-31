import React from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

class MovieModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: {},
    };
    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
  }
  componentDidMount() {
    this.fetchMovieDetails();
  }
  fetchMovieDetails() {
    fetch(
      "http://www.omdbapi.com/?apikey=1d8b2857&r=json&i=" +
        this.props.movie.imdbID
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({ movieDetails: json });
      });
  }

  render() {
    return (
      <Modal
        show={this.props.showMovieModal}
        onHide={() => this.props.closeMovieModal()}
        style={styles.modal}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.movie.Title} ({this.props.movie.Year})
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={styles.modalBody}>
          <Container>
            <Row xs={1} md={2} lg={2}>
              <Col>
                <img style={styles.poster} src={this.props.movie.Poster}></img>
              </Col>
              <Col style={styles.movieDetails}>
                <span>
                  <p>
                    <h6 style={styles.detailHeading}>Release Date:</h6>
                    {this.state.movieDetails.Released}
                  </p>
                  <p>
                    <h6 style={styles.detailHeading}>Director:</h6>
                    {this.state.movieDetails.Director}
                  </p>
                  <p>
                    <h6 style={styles.detailHeading}>Starring:</h6>
                    {this.state.movieDetails.Actors}
                  </p>
                  <p>
                    <h6 style={styles.detailHeading}>Summary:</h6>
                    {this.state.movieDetails.Plot}
                  </p>
                </span>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => this.props.closeMovieModal()}
            style={styles.closeButton}
          >
            Close
          </Button>
          <Button
            variant="primary"
            disabled={this.props.disableNominate}
            style={styles.nomButton}
            onClick={() => this.props.nominate(this.props.movie)}
          >
            Nominate
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
const styles = {
  modal: {
    fontFamily: "Roboto Mono",
  },
  modalBody: {
    fontSize: "13px",
  },
  poster: {
    maxHeight: "300px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "10px",
  },
  movieDetails: {
    paddingHorizontal: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  detailHeading: {
    backgroundColor: "#FDC221",
  },
  nomButton: {
    backgroundColor: "#A50104",
    borderWidth: "2px",
    borderColor: "#FDC221",
    borderRadius: "16px",
  },
  closeButton: {
    borderRadius: "16px",
    paddingBottom: "5px",
  },
};

export default MovieModal;
