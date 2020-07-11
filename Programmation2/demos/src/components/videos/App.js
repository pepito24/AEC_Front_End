import React from 'react';
import './App.css';
import {Carte} from './Carte'; 
import {Video} from './Video'; 
import {Photos} from './Photos'; 
import {Accueil} from './Accueil'; 
import {Menu} from './Menu';
import {PersonnageV4} from './PersonnageV4';
import {PageNotFound} from './PageNotFound'
import {PersonnageComplet} from './PersonnageComplet'

import { Route, Switch } from "react-router-dom"; 


function App() {
  return (
    <>
    <Menu />
     <Switch> 
      <Route path="/" exact component={Accueil} /> 
      <Route path="/Photos" component={Photos} /> 
      <Route path="/Video" component={Video} /> 
      <Route path="/Carte" component={Carte} />  
      <Route path="/PersonnageV4" component={PersonnageV4} /> 
      <Route path="/Perso/:id" component={PersonnageComplet} /> 
      <Route component={PageNotFound} />
    </Switch>
</> 
  );
}

export default App;
