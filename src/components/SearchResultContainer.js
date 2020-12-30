import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import equal from "fast-deep-equal";
import SearchResult from "./SearchResult";
class SearchResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (!equal(this.props.movies, prevProps.movies)) {
      this.renderResults();
    }
  }
  renderResults() {
    return this.props.movies.map((item) => {
      var disableButton = this.props.nominations.some(
        (nom) => item.imdbID === nom.imdbID
      );
      return (
        <SearchResult
          movie={item}
          key={item.imdbID}
          nominate={this.props.nominate}
          disableButton={disableButton}
        >
          {item.Title}
        </SearchResult>
      );
    });
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
    width: "100%",
    display: "block",
    paddingBottom: "80px",
  },
};
export default SearchResultContainer;
