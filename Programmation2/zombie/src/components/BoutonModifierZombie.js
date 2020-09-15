import React from "react";
import { Link } from "react-router-dom";

export class BoutonModifierZombie extends React.Component {
  

  render() {
    return (
      <> 
        <Link to={ this.props.nom + this.props.id + "/modifier"} className="btn btn-orange my-5">
          Modifier le zombie
        </Link>
      </>
    );
  }
}