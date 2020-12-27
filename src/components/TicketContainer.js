import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import equal from "fast-deep-equal";
import Ticket from "./Ticket";
class TicketContainer extends React.Component {
  constructor(props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (!equal(this.props.movies, prevProps.movies)) {
      // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
      this.renderResults();
    }
  }
  renderResults() {
    return this.props.movies.map((item) => (
      <Ticket title={item.Title} imgURL={item.Poster} key={item.imdbID}>
        {item.Title}
      </Ticket>
    ));
  }
  render() {
    return (
      <Container style={styles.cardGroup}>
        <Row xs={1} md={2} lg={3}>
          {this.renderResults()}
        </Row>
      </Container>
    );
  }
}
const styles = {
  cardGroup: {
    width: "50%",
    display: "block",
    paddingBottom: "80px",
  },
};
export default TicketContainer;
