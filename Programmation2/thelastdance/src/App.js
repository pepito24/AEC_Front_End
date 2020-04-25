import React from 'react';
import logo from './netfix.png';
import './App.css';
import image from './1.jpg';


const people = ['Steve Keer', 'Michael Jordan', 'Bill Wennington', 'Scottie Pippen', 'Dennis Rodman']; 

const peopleLis = people.map((person,i) => 
    <li key={'person' + i}>{person}</li>); 
 

    let plat= Math.floor(Math.random() * 4 +1); 

    const listeAlea= ( 
      <ul> 
        <li>Shany</li> 
        { plat === 1 && <li>Pizza</li> } 
        { plat === 2 && <li>Chinois</li> } 
        { plat === 3 && <li>Thai</li> } 
        { plat === 4 && <li>Vietnamien</li> } 
      </ul> 
    ); 

function App() {
  return (  
      <div className="App">
      <h1>THE LAST DANCE</h1>   
      <p>
         Une production de
      </p>
      <img src={logo} alt="logo" />
      <p>
         Mettant en vedette
      </p>
      <h2>{peopleLis}</h2>
      <img src={image} alt="logo" />
      <p>
      {peopleLis}
      </p>
      <p>
      {listeAlea}
      </p>

      </div>
    ); 
}

export default App;
