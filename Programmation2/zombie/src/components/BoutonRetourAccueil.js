import React from "react";
import { Link } from "react-router-dom";

export class BoutonRetourAccueil extends React.Component {
  

  render() {
    return (
      <> 
        <Link to="/" className="btn btn-black my-5">
          Back to Home
        </Link>
      </>
    );
  }
}