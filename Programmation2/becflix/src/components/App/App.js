import React from 'react';
import '../App/App.css';
import Container from 'react-bootstrap/Container' ;  
import Row from 'react-bootstrap/Row' ;  
import Col from 'react-bootstrap/Col' ;
import { TvShow } from '../TvShow/TvShow';
import { Categorie } from '../Categorie/Categorie';

function App() {  

  return (  
<div>
    <Categorie />
    <Categorie />
    <Categorie />
    <Categorie />
    <Categorie />
    </div>
  );  
}  

export default App;
