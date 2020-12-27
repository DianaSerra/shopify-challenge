import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import SearchBar from "./components/SearchBar.js";
import TicketContainer from "./components/TicketContainer.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      nominations: [],
    };
    this.search = this.search.bind(this);
  }
  search(searchString) {
    if (searchString) {
      fetch(
        "http://www.omdbapi.com/?apikey=1d8b2857&type=movie&r=json&s=" +
          searchString.target.value
      )
        .then((res) => res.json())
        .then((json) => {
          var newState = json.Search
            ? Object.assign({ ...this.state }, { movies: json.Search })
            : Object.assign({ ...this.state }, { movies: [] });
          console.log(JSON.stringify(json));
          this.setState(newState);
        });
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div style={styles.body}>
          <SearchBar search={this.search} />
          <TicketContainer movies={this.state.movies} />
        </div>
      </div>
    );
  }
}
const styles = {
  body: {
    margin: "auto",
    paddingTop: 20,
    width: "80%",
  },
};
export default App;
