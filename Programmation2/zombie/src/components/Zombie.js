import React from "react";
import { Link } from "react-router-dom";

export class Zombie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <>
        <Link to={"Perso/" + this.props.nom + "?id=" + this.props.id}>
          <h1>{this.props.nom}</h1>
          <image src={this.props.urlPhoto} rounded width="125"/>
        </Link> 
      </>
    );
  }
}