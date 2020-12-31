import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import equal from "fast-deep-equal";
import SearchResult from "./SearchResult";
import stitch from "../assets/images/stitch.png";
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
    if (this.props.movies.length === 0 && this.props.searchInput) {
      return (
        <div style={{ minWidth: "100%" }}>
          <img src={stitch} alt="Sad cartoon character"></img>
          <p>
            Oh no! We couldn't find any movies with that title- check your
            spelling and try again!
          </p>
        </div>
      );
    }
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
        <Row xs={1} md={2} lg={3} style={styles.results}>
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
  results: {
    justifyContent: "center",
    minWidth: "100%",
    fontFamily: "Roboto Mono",
  },
};
export default SearchResultContainer;
