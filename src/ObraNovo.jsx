import React, { Component } from "react";

// corrige o erro de importação

import { withModal } from "./components/modals/ModalProvider";
import Modal from "react-bootstrap/Modal";

class ObraNovo extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("teste");
  }

  render() {
    return (
      <>
        <Modal.Header closeButton>
          <Modal.Title>Aditivos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>aqui vai o conteudo</p>
        </Modal.Body>
      </>
    );
  }
}

export default withModal(ObraNovo);
