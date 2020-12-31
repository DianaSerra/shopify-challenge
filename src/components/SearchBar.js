import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import loupe from "../assets/images/loupe.png";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <InputGroup style={styles.barContainer}>
        <InputGroup.Prepend style={styles.prepend}>
          <InputGroup.Text style={styles.prepend} id="basic-addon1">
            <img
              src={loupe}
              style={styles.loupe}
              alt="Magnifying glass icon"
            ></img>
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type="text"
          style={styles.bar}
          placeholder="Search Movie Titles ..."
          onChange={this.props.onChangeSearchText}
        />
      </InputGroup>
    );
  }
}
const styles = {
  barContainer: {
    marginBottom: "20px",
  },
  prepend: {
    borderTopLeftRadius: "16px",
    borderBottomLeftRadius: "16px",
  },
  bar: {
    borderColor: "#C1C1C1",
    borderTopRightRadius: "16px",
    borderBottomRightRadius: "16px",
    fontFamily: "Roboto Mono",
  },
  loupe: {
    height: "20px",
  },
};
export default SearchBar;
