import React from "react";
import Grid from "../assets/images/Grid.png";
import Badge from "react-bootstrap/Badge";
class NominationList extends React.Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }
  renderList() {
    return this.props.nominations.map((item) => (
      <li key={item.imdbID}>
        {item.Title} ({item.Year}){"  "}
        <Badge
          pill
          style={styles.delElem}
          variant="dark"
          onClick={() => this.props.deleteNom(item)}
        >
          X
        </Badge>
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
    height: "200px",
  },
  delElem: {
    cursor: "pointer",
  },
};
export default NominationList;
