import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export class PersonnageV4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data : []
    };
  }

  //Ajout de la gestion des erreurs
  async componentDidMount(){
    let tabTMP = [];
    for (let i = 1; i <= 10; i++) {
    try {
      const response = await fetch('https://swapi.dev/api/people/' + i + '/');

      const json = await response.json();

      tabTMP.push(json);

      this.setState({ data: tabTMP });



      if (!response.ok) {
        throw Error(response.statusText);
      }
    } 
    
    catch (error) {
      console.log(error);
    }
}
}

  render() {
    return (
        <div>
        <ul>
          {this.state.data.map((key) => (
            <li key={key.name}>{key.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}