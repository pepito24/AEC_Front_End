import React from "react";
import Col from "react-bootstrap/Col";


export class Albums extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hovered: false }; 
      }


  render() {
    return (
      <Col xs lg="3" className="text-left">

        <img src={this.props.src} className="img-fluid"
        
        onMouseOut={() => this.setState({hovered: false})}
        onMouseOver={() => this.setState({hovered: true})}
        style={{transform: `${this.state.hovered ? 'scale(1.1,1.1)' : 'scale(1,1)'}`, transition: `${this.state.hovered ? '0.5s' :  '0.5s'}`}}
        />
        
            <h5 className="mt-2">{this.props.titre}</h5>
            <p className="mb-5">{this.props.artiste}</p>
        

      </Col>
    );
  }
}