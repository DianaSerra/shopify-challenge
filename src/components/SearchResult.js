import React from "react";
import { Card, Button } from "react-bootstrap";
import MovieModal from "./MovieModal.js";
class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMovieDetails: false,
    };
    this.closeMovieModal = this.closeMovieModal.bind(this);
  }
  closeMovieModal() {
    this.setState({ showMovieDetails: false });
  }
  render() {
    return (
      <Card style={styles.card}>
        <Card.Img
          variant="top"
          src={this.props.movie.Poster}
          alt="Movie Poster"
        />
        <Card.Body>
          <Card.Title style={styles.cardTitle}>
            {this.props.movie.Title} ({this.props.movie.Year})
          </Card.Title>
        </Card.Body>
        <Button
          disabled={this.props.disableButton}
          variant="primary"
          onClick={() => this.props.nominate(this.props.movie)}
          style={styles.nomButton}
        >
          Nominate
        </Button>
        <Button
          style={styles.detailButton}
          variant="secondary"
          onClick={() => this.setState({ showMovieDetails: true })}
        >
          More Details
        </Button>
        <MovieModal
          showMovieModal={this.state.showMovieDetails}
          closeMovieModal={this.closeMovieModal}
          movie={this.props.movie}
          nominate={this.props.nominate}
          disableNominate={this.props.disableButton}
        />
      </Card>
    );
  }
}
const styles = {
  card: {
    width: "30%",
    display: "inline-block",
    fontFamily: "Roboto Mono",
  },
  cardTitle: {
    fontSize: "17px",
  },
  nomButton: {
    backgroundColor: "#A50104",
    borderWidth: "2px",
    borderColor: "#FDC221",
    borderRadius: "16px",
    margin: "5px",
  },
  detailButton: {
    borderRadius: "16px",
    margin: "5px",
  },
};

export default SearchResult;
