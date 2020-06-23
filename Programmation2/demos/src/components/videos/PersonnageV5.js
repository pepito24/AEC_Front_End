import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export class PersonnageV5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data : []
    };
  }

  //Ajout de la gestion des erreurs
  async componentDidMount(){ 
    try {
      const response = await fetch('https://swapi.dev/api/people/1/');
      const json = await response.json();
      this.setState({ data: json });
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } 
    catch (error) {
      console.log(error);
    }
}

  render() {
    return (
        
        <Container>
            <Row>
                <Col xs lg={2}>
                    <Card style={{ width: '18rem' }}>
                    {Object.keys(this.state.data).map(key => (
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{key} : {this.state.data[key]}</ListGroupItem>
                    </ListGroup>
                    ))} 
                    </Card>
                </Col>
            </Row>
        </Container>
    );
  }
}