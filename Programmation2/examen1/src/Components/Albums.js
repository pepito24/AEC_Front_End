import React from "react";
import Col from "react-bootstrap/Col";




export class Albums extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hovered: false }; 
        
      }

    
       
      


  render() {

    
    return (
      <Col sm="12" md="6" lg="3"  className="text-left">
        <img src={this.props.src} id ={this.props.id} className="img-fluid" alt="" onClick={this.props.onClicked}
        onMouseOut={() => this.setState({hovered: false})}
        onMouseOver={() => this.setState({hovered: true})}
        style={{transform: `${this.state.hovered ? 'scale(1.1,1.1)' : 'scale(1,1)'}`, transition: `${this.state.hovered ? '0.5s' :  '0.5s'}`}}
        />

            <h5 className="mt-2">{this.props.titre}</h5>
            <p className="mb-5">{this.props.artiste}</p>
            <p className="mb-5">{this.props.chanson}</p>
            <br></br><br></br>
            <p className="mb-5">{this.props.lyrics}</p>
            
      </Col>
    );
  }
}