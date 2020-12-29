import React from "react";
import header from "../assets/images/Header.png";
class Header extends React.Component {
  render() {
    return <img src={header} style={styles.header}></img>;
  }
}
const styles = {
  header: {
    maxWidth: "60%",
    maxHeight: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
};
export default Header;
