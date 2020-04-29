import React from 'react';
import Col from 'react-bootstrap/Col';  

import show from "../../images/22.jpg";
const firstShow = <img id="img" src={show} alt="Vikings" />; 

export class TvShow extends React.Component {  

    render() {  
       return <Col lg="2">{firstShow}</Col> ;  
    }  
};  