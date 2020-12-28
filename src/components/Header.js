import React from "react";
import header from "../assets/images/Header.png";
class Header extends React.Component {
  render() {
    return <img src={header} style={styles.header}></img>;
  }
}
const styles = {
  header: {
    display: "flex",
    maxWidth: "100%",
    maxHeight: "100%",
  },
};
export default Header;
