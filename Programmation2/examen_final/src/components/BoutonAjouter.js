import React from "react";
import { Link } from "react-router-dom";


export class BoutonAjouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <> 
        <Link to="/AjouterObjet" className="btn btn-primary mt-5">
          Ajouter un Pokemon
        </Link>
      </>
    );
  }
}