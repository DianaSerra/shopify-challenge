import React from "react";
import Grid from "../assets/images/Grid.png";

class NominationList extends React.Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }
  renderList() {
    console.log(this.props.nominations);
    return this.props.nominations.map((item) => (
      <li key={item.imdbID}>
        {item.Title} ({item.Year})
      </li>
    ));
  }
  render() {
    return (
      <div style={styles.nomList}>
        <h4>Your Nominations: </h4>
        <ol>{this.renderList()}</ol>
      </div>
    );
  }
}
const styles = {
  nomList: {
    backgroundImage: `url(${Grid})`,
    backgroundSize: "cover",
  },
};
export default NominationList;
