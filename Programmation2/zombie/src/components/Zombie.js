import React from "react";
import { Link } from "react-router-dom";

export class Zombie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.toutLobjet);
    return (
      <>
          <Link to={"Perso/" + this.props.nom + "?id=" + this.props.id}>
            <h1>{this.props.nom}</h1>
          </Link>   
      </>
    );
  }
}