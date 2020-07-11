import React from "react";
import { Link } from "react-router-dom";

export class Perso extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>     
        <Link to={"Perso/"+ this.props.id}>
          <h1>-{this.props.nom}</h1>
        </Link>
      </>
    );
  }
}