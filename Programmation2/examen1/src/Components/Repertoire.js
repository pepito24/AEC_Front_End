import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Albums } from "../Components/Albums";
import './App.css';



/* tout mes albums / chansons / lyrics  */
const liste = [
    {            
      src: require("../img/holly1.jpg"),  
      titre: "American Tragedy",      
      artiste:"Hollywood Undead", 
      id : "album1",  
      chanson: ['Been to Hell','Apologize','Comin in Hot','My Town','I Dont Wanna Die','Hear Me Now','Gangsta Sexy','Glory'] , 
      lyrics:["As I walk through the valley of the shadow of death I wear my crown of thorns and pull the knife out my chest I keep searching for something that I never seem to find But maybe I won't, because I left it all behind Now I'm stuck with this, and that'll never change Always a part of me, until the very last day  Where to go from here? What road to travel on? I spent my whole life choosing, and it always chose wrong Will I try to have the will to be alive? Will I try because I've never seen the light? Blow it to the ground and it's now you see..."]
    },
    {
        src: require("../img/holly2.jpg"),  
        titre: "Swan Songs",      
        artiste:"Hollywood Undead",
        id : "album2",
        chanson: ['Undead','Sell Your Soul','Everywhere I Go','No Other Place','No. 5','Young','City','The Diary'] , 
    },
    {
        src: require("../img/liking1.jpg"),  
        titre: "Hybrid Theory",      
        artiste:"Linkin Park",
        id : "album3",
        chanson: ['Papercut','One Step Closer','With You','Points of Authority','Crawling','Runaway','By Myself','In the End'] , 
    },
    {
        src: require("../img/link2.jpg"),  
        titre: "Meteora",      
        artiste:"Linkin Park",
        id : "album4",
        chanson: ['Foreword','Dont Stay','Somewhere I Belong','Lying from You','Hit the Floor','Easier to Run','Faint','Figure.09'] , 
    },
    {
        src: require("../img/twd.jpg"),  
        titre: "Trench",      
        artiste:"Twenty One Pilots",
        id : "album5",
        chanson: ['Jumpsuit','Levitate','Morph','My Blood','Chlorine','Smithereens','Neon Gravestones','The Hype','Nico and the Niners'] , 
    },
    {
        src: require("../img/white.jpg"),  
        titre: "White Rabbit",      
        artiste:"Egypt Central",
        id : "album6",
        chanson: ['Ghost Town','White Rabbit','Goodnight','Kick Ass','Change','The Drug (Part One)','Down in Flames','Enemy Inside (Part Two)'] , 
    },
    {
        src: require("../img/monster.jpg"),  
        titre: "Popular Monster",      
        artiste:"Falling In reverse",
        id : "album7",
        chanson: ['Raised by Wolves','The Drug in Me Is You','Im Not A Vampire','Alone','Fashionably Late','Guillotine IV (The Final Chapter)','Just Like You','Popular Monster'] , 
    },
    {
        src: require("../img/gravity.jpg"),  
        titre: "Gravity (Deluxe Edition)",      
        artiste:"Bullet For My Valentine",
        id : "album8",
        chanson: ['Leap of Faith','	Over It','Letting You Go','Not Dead Yet','The Very Last Time','	Piece of Me','Under Again','Gravity'] , 
      
    },
  ];



export class Repertoire extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rechercher:"", listeAlbums : liste , afficherChanson: false};
        this.Rechercher = this.Rechercher.bind(this);                                        /* recherche */
        this.Effacer = this.Effacer.bind(this);                                              /* recherche */
        this.handleChanson = this.handleChanson.bind(this);
      }


      handleChanson(){
        
        let click = true;  
        onClicked = click;
        this.setState({ afficherChanson: click }); 
      } 



/* recherche */

      Rechercher(){
        let titre = document.getElementById("inputRechercher").value;  
        this.setState({rechercher:titre});
       }

      Effacer(){
        document.getElementById("inputRechercher").value = ""; 
        this.setState({rechercher:""});
      }

/* recherche fin */


      AfficherRepertoire() {
        if(this.state.rechercher === ""){  
           return this.state.listeAlbums.map((element, i) => (
            <Albums onClicked = {this.handleChanson}
                src={element.src} 
                titre={element.titre}  
                artiste={element.artiste} 
                id={element.id} 
            ></Albums>
          ));
        }

        else  if(this.state.rechercher === "" && this.state.afficherChanson === true){  
          return this.state.listeAlbums.map((element, i) => (
          <Albums 
              src={element.src} 
              titre={element.titre}  
              artiste={element.artiste} 
              chanson={element.chanson} 
          ></Albums>
        ));
        }


        else{
            const searchResult = this.state.listeAlbums.filter(l => l.titre.toLowerCase().includes(this.state.rechercher.toLowerCase()));
    
            return searchResult.map((element, i) => (
                <Albums
                  src={element.src}  
                  titre={element.titre}  
                  artiste={element.artiste}  
                  id={element.id}  
                  onClicked={this.handleChanson}
              ></Albums>
            ));
          }
        }



  render() {
    return (
        <Container>
            <Row className="mb-5">
                <Form className="mb-5 mt-5">
                    <InputGroup className="mb-3">
                    <FormControl
                        id="inputRechercher"
                        placeholder="🔍"
                        aria-label="Rechercher"                                             
                        aria-describedby="Rechercher"
                        onChange={this.Rechercher}
                    />
                    <InputGroup.Append>
                        <Button variant="secondary" onClick={this.Rechercher}>Rechercher</Button>
                    </InputGroup.Append>
                    <InputGroup.Append>
                        <Button variant="danger" onClick={this.Effacer}>Annuler</Button>
                    </InputGroup.Append>
                    </InputGroup>
                </Form>
            </Row>
            <Row>
                <Col md={2} xs ={12}>
                    <h1 className="mb-3">Albums</h1>
                </Col>
            </Row>
            <Row className="mb-5">
                    {this.AfficherRepertoire()}
            </Row>
      </Container>
    );
  }
}