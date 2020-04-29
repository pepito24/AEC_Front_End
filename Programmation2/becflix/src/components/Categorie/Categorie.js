import React from 'react';
import Container from 'react-bootstrap/Container' ;  
import Row from 'react-bootstrap/Row' ;  
import Col from 'react-bootstrap/Col' ;
import { TvShow } from '../TvShow/TvShow';
   
const nonCategorie = "Suspense";

export class Categorie extends React.Component {  

    render() {  
       return <Container>
       <Row>
           <h1>{ nonCategorie }</h1>
           </Row>
           <Row>
           <TvShow />
           <TvShow />
           <TvShow />
           <TvShow />
           <TvShow />
           <TvShow />
               </Row>
           </Container>   
    }  
};  