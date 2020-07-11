import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom'

export class PersonnageComplet extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
      }

      componentDidMount() {
        fetch("https://swapi.dev/api/people/" + this.props.match.params.id +"/")
          .then((res) => res.json())
          .then((json) => this.setState({ data: json }));
      }
    
      render() {
        return (
            <Container fluid>
            <Row className="text-center box1 align-items-center text-white">
              <Col lg="12">
             <h1>{this.state.data.name}</h1>
            <h4>{this.state.data.height}</h4>
            <h4>{this.state.data.hair_color}</h4>
            <h4>{this.state.data.skin_color}</h4>
            <h4>{this.state.data.eye_color}</h4>
            </Col>
          </Row>
          <Row className="text-center footer align-items-center">
            <Col>
                <Link exact to="/PersonnageV4" className="btn btn-light"> 
                    Retour 
                </Link> 
            </Col>
          </Row>
      </Container> 
          
        );
      }
    }