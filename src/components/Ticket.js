import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class Ticket extends React.Component {
  constructor(props) {
    super(props);
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
          <Button
            disabled={this.props.disableButton}
            variant="primary"
            onClick={() => this.props.nominate(this.props.movie)}
            style={styles.nomButton}
          >
            Nominate
          </Button>
        </Card.Body>
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
  },
};

export default Ticket;
