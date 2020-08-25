import React from 'react';
import './App.css';
import {MenuAvecPostBack} from './MenuAvecPostBack' 

import {Route} from 'react-router-dom' 

function App() { 
return ( 
  <> 
  <MenuAvecPostBack /> 
    <Route path="/" exact component={PersonnageV1} /> 
    <Route path="/PersonnageV2" component={PersonnageV2} /> 
    <Route path="/PersonnageV3" component={PersonnageV3} /> 
    <Route path="/PersonnageV4" component={PersonnageV4} /> 
    <Route path="/ShortenURL" component={ShortenURL} /> 
  </>
); 
} 

export default App;
