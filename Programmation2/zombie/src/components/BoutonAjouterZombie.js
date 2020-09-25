import React from "react";
import { Link } from "react-router-dom";


export class BoutonAjouterZombie extends React.Component {
  

  render() {
    return (
      <> 
        <Link to="/ajouterZombie" className="btn btn-orange my-5">
          Add a new Zombie
        </Link>
      </>
    );
  }
}