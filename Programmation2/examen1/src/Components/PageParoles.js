import React from "react";
import Container from "react-bootstrap/Container";
import { Paroles } from "./Paroles";
import './App.css';


const Chanson1 = [
    {            
      src: require("../img/holly1.jpg"),  
      titre: "American Tragedy",        
      chanson : "Undead",    
      parole: " Undead! (Undead) Undead! (Undead) Undead! (Undead) Undead! (Undead)(Undead!) You better get up out the way Tomorrow we ll rise so let's fight today You know I don't give a fuck what you think and say 'Cause we gon' rock this whole place anyway (Undead!) You better get up out the way Tomorrow we'll rise so let's fight today You know I don't give a fuck what you think and say 'Cause we gon' rock this whole place anyway. Look up and see that motherfucking writing on the wall When you see J3T thirty deep, he's down to brawl Fuck all haters I see 'cause I hate that you breathe I see you duck, you little punk, you little fucking disease I got HU tatted on the front of my arms The boulevard, brass knuckles in the back of the car 'Cause we drunk-drive Cadillacs, we never go far But when you see us motherfuckers, better know who we are I got one thing to say to punk-asses who hate Motherfuckers don't know, but you better watch what you say From these industry fucks to these faggot-ass punks You don't know what it takes to get this motherfucking drunk. I'm already loud maybe, it's a little too late Johnny's taking heads off of all faggots who hate 'Cause I'm a God, motherfucker, there's a price to pay Yeah, I'm a God, motherfucker, and it's judgment day! (Undead!) You better get up out the way Tomorrow we'll rise so let's fight today You know I don't give a fuck what you think and say 'Cause we gon' rock this whole place anyway (Undead!) You better get up out the way Tomorrow we'll rise so let's fight today You know I don't give a fuck what you think and say 'Cause we gon' rock this whole place anyway. I'm getting used to this nuisance of fags who badmouth this music How fucking stupid and foolish of you to think you can do this You cowards can't, you never will, don't even try to pursue it I took the chance, I paid the bill, I nearly died for this music . You make me wanna run around pulling my guns out and shit You're tempting me to run my mouth and call you out on this, bitch How ignorant you gotta be to believe any of this You need to slit your wrists, get pissed, and go jump off a bridge. What? You can't see the sarcasm in the verses I spit? What? You think I just got lucky, didn't work for this shit? Bitch, I've been working at this ever since I was a kid I've played a million empty shows to only family and friends. What kind of person would diss a band that deserves to get big? I'd hate to be that person when my verse comes out their kid's lips That shit's as worse as it gets, this verse is over, I quit Signed Charlie Scene on your girlfriend's tits! (Undead!) You better get up out the way Tomorrow we'll rise so let's fight today You know I don't give a fuck what you think and say 'Cause we gon' rock this whole place anyway (Undead!) You better get up out the way Tomorrow we'll rise so let's fight today You know I don't give a fuck what you think and say 'Cause we gon' rock this whole place anyway. White boys with tattoos, p-pointing right at you We're breaking everything, r-rowdy like a classroom Pack of wolves 'cause we don't follow the rules And when you're running your mouth, our razor blades come out. But why you always pressing? You know I'm never stressing With Loki DMS, J-Johnny to my left Got Phantom and the rest who are down there at the west I grew up by drive-bys and LA gang signs."
    },
  ];

export class PageParoles extends React.Component {
  render() {
    return (
        <Container> 
            {this.AfficherParoles()}  
      </Container>
    );
  }
  
  AfficherParoles() {
       return Chanson1.map((element, i) => (

        <Paroles
          src={element.src} 
          titre={element.titre}   
          chanson={element.chanson}
          parole={element.parole}
        ></Paroles>
      ));
    }
  }