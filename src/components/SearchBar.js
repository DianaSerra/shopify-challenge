import React from "react";
import Form from "react-bootstrap/Form";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };
    this.onChangeSearchText = this.onChangeSearchText.bind(this);
  }
  onChangeSearchText(val) {
    const newState = Object.assign({ ...this.state }, { searchInput: val });
    this.setState(newState);
    this.props.search(this.state.searchInput);
  }
  render() {
    return (
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Search Movie Titles ..."
          onChange={this.onChangeSearchText}
        />
      </Form.Group>
    );
  }
}
export default SearchBar;
