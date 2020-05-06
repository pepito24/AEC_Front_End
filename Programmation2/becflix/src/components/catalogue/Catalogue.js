import React from 'react';
import {Categorie} from '../Categorie/Categorie';




export class Catalogue extends React.Component{
  render() {
    return (
      <>
      <Categorie categorie="Suspense"/>
      <Categorie categorie="Humour"/>
      <Categorie categorie="Series americaines"/>
      <Categorie/>
      <Categorie/>
      <Categorie/>
      </>
      )
  }
}