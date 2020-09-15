import React from "react";
import { Link } from "react-router-dom";

export class BoutonModifierZombie extends React.Component {
  

  render() {
    return (
      <> 
        <Link to={"modifier/" + this.props.nom + "?id=" + this.props.id} className="btn btn-orange my-5">
          Modifier le zombie
        </Link>
      </>
    );
  }
}