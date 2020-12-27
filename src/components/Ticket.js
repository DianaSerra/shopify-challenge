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
          style={styles.cardImg}
          variant="top"
          src={this.props.imgURL}
        />
        <Card.Body style={styles.cardBody}>
          <Card.Title>{this.props.title}</Card.Title>
          <Button variant="primary">Nominate</Button>
        </Card.Body>
      </Card>
    );
  }
}
const styles = {
  card: {
    width: "30%",
    //height: "200px",
    display: "inline-block",
  },
  cardImg: {
    //width: "150px",
    //height: "200px",
    //display: "inline-block",
  },
  cardBody: {
    //height: "25px",
  },
};

export default Ticket;
