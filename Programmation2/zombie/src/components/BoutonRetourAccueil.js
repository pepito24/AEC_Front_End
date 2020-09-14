import React from "react";
import { Link } from "react-router-dom";

export class BoutonRetourAccueil extends React.Component {
  

  render() {
    return (
      <> 
        <Link to="/" className="btn btn-orange my-5">
          Back
        </Link>
      </>
    );
  }
}