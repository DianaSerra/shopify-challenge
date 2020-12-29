import React from "react";
import trophy from "../assets/images/trophy 1.jpg";
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
        <h4 style={styles.title}>
          <img src={trophy} style={styles.trophy} alt="Trophy icon"></img>{" "}
          Nominate 5 of Your Favorite Movies!{" "}
          <img src={trophy} style={styles.trophy} alt="Trophy icon"></img>
        </h4>
        <ol style={styles.list}>{this.renderList()}</ol>
      </div>
    );
  }
}
const styles = {
  nomList: {
    minHeight: "200px",
    fontFamily: "Roboto Mono",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "16px",
    borderColor: "#C1C1C1",
  },
  delElem: {
    cursor: "pointer",
  },
  title: {
    paddingTop: "20px",
    paddingBottom: "15px",
    fontSize: "17px",
  },
  trophy: {
    height: "20px",
  },
  list: {
    paddingLeft: "50px",
    fontSize: "12px",
    textAlign: "start",
  },
};
export default NominationList;
