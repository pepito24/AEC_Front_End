import React from "react";
import Button from "react-bootstrap/Button";

export class Deconnexion extends React.Component {
  handleDeconnexion() {
    this.props.onChange2(false);
  }
  render() {
    return (
      <Button variant="danger" onClick={() => this.handleDeconnexion()}>
        Déconnexion
      </Button>
    );
  }
}