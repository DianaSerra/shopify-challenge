import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import equal from "fast-deep-equal";

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
      <ListGroup.Item key={item.imdbID}>{item.Title}</ListGroup.Item>
    ));
  }
  render() {
    return <ListGroup>{this.renderResults()}</ListGroup>;
  }
}
export default TicketContainer;
