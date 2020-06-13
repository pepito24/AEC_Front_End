import React from "react";
import Button from "react-bootstrap/Button";

export class Deconne extends React.Component {
  handleDeconnexion2() {
    this.props.onClick(false);
  }
  render() {
    return (
      <Button variant="danger" onClick={() => this.handleDeconnexion2()}>
        Déconnexion
      </Button>
    );
  }
}
}