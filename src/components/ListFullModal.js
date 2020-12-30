import Modal from "react-bootstrap/Modal";
import popcorn from "../assets/images/cinema 1.png";
import noentry from "../assets/images/no-entry 1.png";
import React from "react";

class ListFullModal extends React.Component {
  constructor(props) {
    super(props);
    this.renderSuccessOrFull = this.renderSuccessOrFull.bind(this);
  }
  renderSuccessOrFull() {
    if (this.props.showFullModal) {
      return (
        <div>
          <img src={noentry} style={styles.popcorn} alt="No entry icon"></img>{" "}
          Your Nomination List is Already Full!{" "}
          <img src={noentry} style={styles.popcorn} alt="No entry icon"></img>
        </div>
      );
    } else if (this.props.showSuccessModal) {
      return (
        <div>
          <img src={popcorn} style={styles.popcorn} alt="Popcorn icon"></img>{" "}
          You've Successfully Nominated 5 Movies!{" "}
          <img src={popcorn} style={styles.popcorn} alt="Popcorn icon"></img>
        </div>
      );
    }
  }
  render() {
    return (
      <Modal
        show={this.props.showSuccessModal || this.props.showFullModal}
        onHide={() => this.props.closeListFull()}
        style={styles.modal}
        size="lg"
      >
        <Modal.Header src={styles.modalTitle} closeButton>
          <Modal.Title>{this.renderSuccessOrFull()}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={styles.modalBody}>
          <p>
            If you want to modify your nominations, start by deleting items on
            your list.
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

const styles = {
  modal: {
    fontFamily: "Roboto Mono",
  },
  modalTitle: {
    fontSize: "15px",
  },
  modalBody: {
    fontSize: "13px",
    alignText: "center",
  },
  popcorn: {
    height: "27px",
  },
};

export default ListFullModal;
