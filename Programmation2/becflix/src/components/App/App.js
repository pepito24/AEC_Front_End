import React from 'react';
import '../App/App.css';
import Container from 'react-bootstrap/Container' ;  
import Row from 'react-bootstrap/Row' ;  
import Col from 'react-bootstrap/Col' ;
import { TvShow } from '../TvShow/TvShow';

function App() {  

  return (  

    <Container>  
      <Row className="justify-content-md-center">   
        {TvShow}       
      </Row>  
    </Container>  
  );  
}  

export default App;
