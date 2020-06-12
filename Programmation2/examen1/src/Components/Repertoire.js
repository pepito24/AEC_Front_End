import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Albums } from "../Components/Albums";
import { Chansons } from "../Components/Chansons";
import { Lyrics } from "../Components/Lyrics";
import './App.css';

/* tout mes albums / chansons / lyrics  */
const liste = [
    {            
      src: require("../img/holly1.jpg"),  
      titre: "Swan Songs",      
      artiste:"Hollywood Undead", 
      id : "1", 
      chanson: ['Undead ♫','Sell Your Soul ♫','Everywhere I Go','No Other Place','No. 5','Young','City','The Diary'], 
      lyrics:"As I walk through the valley of the shadow of death I wear my crown of thorns and pull the knife out my chest I keep searching for something that I never seem to find But maybe I won't, because I left it all behind Now I'm stuck with this, and that'll never change Always a part of me, until the very last day  Where to go from here? What road to travel on? I spent my whole life choosing, and it always chose wrong Will I try to have the will to be alive? Will I try because I've never seen the light? Blow it to the ground and it's now you see...",
      lyrics2:"You heard us before but that was just a little sample . We're back for more here to set a worse example Chop it up white stuff let's begin Big wolves linin' up and scorin' little pigs Still drunk and we're doin' it again With a huff and a puff I blow and burn down your shit Learn it out pitch black grin still white skinny You know I'm hard to kill for real Im movin in Im puttin' 22 down while I'm pukin' up blood You know I'm here to stay well fuck I'm gonna die young Now my posse's gettin' big and my posse's gettin' bigger It's 188 minus one you know the figure ...",
     
    },
    {
        src: require("../img/holly2.jpg"),  
        titre: "American Tragedy",      
        artiste:"Hollywood Undead",
        id : "2",
        chanson: ['Been to Hell','Apologize','Comin in Hot','My Town','I Dont Wanna Die','Hear Me Now','Gangsta Sexy','Glory']  , 
    },
    {
        src: require("../img/liking1.jpg"),  
        titre: "Hybrid Theory",      
        artiste:"Linkin Park",
        id : "3",
        chanson: ['Papercut','One Step Closer','With You','Points of Authority','Crawling','Runaway','By Myself','In the End'] , 
    },
    {
        src: require("../img/link2.jpg"),  
        titre: "Meteora",      
        artiste:"Linkin Park",
        id : "4",
        chanson: ['Foreword','Dont Stay','Somewhere I Belong','Lying from You','Hit the Floor','Easier to Run','Faint','Figure.09'] , 
    },
    {
        src: require("../img/twd.jpg"),  
        titre: "Trench",      
        artiste:"Twenty One Pilots",
        id : "5",
        chanson: ['Jumpsuit','Levitate','Morph','My Blood','Chlorine','Smithereens','Neon Gravestones','The Hype','Nico and the Niners'] , 
    },
    {
        src: require("../img/white.jpg"),  
        titre: "White Rabbit",      
        artiste:"Egypt Central",
        id : "6",
        chanson: ['Ghost Town','White Rabbit','Goodnight','Kick Ass','Change','The Drug (Part One)','Down in Flames','Enemy Inside (Part Two)'] , 
    },
  ];

export class Repertoire extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rechercher:"",
                      listeAlbums : liste,
                      afficherChanson: "0",
                      albums:"0",
                    };
        this.Rechercher = this.Rechercher.bind(this);                                        /* recherche */
        this.Effacer = this.Effacer.bind(this);                                              /* recherche */
        this.handleAlbums = this.handleAlbums.bind(this);
        this.handleChanson2 = this.handleChanson2.bind(this);
        this.handleChanson3 = this.handleChanson3.bind(this);
        this.handleRetour = this.handleRetour.bind(this);
        this.handleRetour2 = this.handleRetour2.bind(this);
        this.handleChanson4 = this.handleChanson4.bind(this);
        this.handleChanson5 = this.handleChanson5.bind(this);
        this.handleChanson6 = this.handleChanson6.bind(this);
        this.handleChanson7 = this.handleChanson7.bind(this);
        this.handleChanson8 = this.handleChanson8.bind(this);
        this.handleChanson9 = this.handleChanson9.bind(this);
      }

/* Click sur un album */
      handleAlbums(e){
        const id = e.target.id;
        this.setState({ albums: id });
        console.log(id);
        let click = "1";  
        this.setState({ afficherChanson: click }); 
      } 

/* Album 1 chanson 1 */
      handleChanson2(){
        let click = "2";  
        this.setState({ afficherChanson: click }); 
      } 
/* Album 1 chanson 2 */
      handleChanson3(){
        let click = "3";  
        this.setState({ afficherChanson: click }); 
      } 

/* Chanson avec lyrics par default */
      handleChanson4(){
        let click = "4";  
        this.setState({ afficherChanson: click }); 
      } 

      handleChanson5(){
        let click = "5";  
        this.setState({ afficherChanson: click }); 
      } 

      handleChanson6(){
        let click = "6";  
        this.setState({ afficherChanson: click }); 
      } 
      handleChanson7(){
        let click = "7";  
        this.setState({ afficherChanson: click }); 
      } 
      handleChanson8(){
        let click = "8";  
        this.setState({ afficherChanson: click }); 
      } 
      handleChanson9(){
        let click = "9";  
        this.setState({ afficherChanson: click }); 
      } 

/* Bouton de retour page chanson album 1*/
      handleRetour(){
        let click = "1";  
        this.setState({ afficherChanson: click }); 
      } 

/* Pour retour a la page des albums */
      handleRetour2(){
        let click = "0";                                      
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
        if(this.state.rechercher === "" && this.state.afficherChanson === "0"){  
           return this.state.listeAlbums.map((element, i) => (
             
            <Albums 
                onClicked = {this.handleAlbums}
                src={element.src} 
                titre={element.titre}  
                artiste={element.artiste} 
                id={element.id} 
           ></Albums>
          ));
        }

/* Album 1 */
        else if(this.state.afficherChanson === "1" && this.state.albums === "1" && this.state.rechercher === ""){  
          return(
          <Chansons 
              retourCatalogue = {this.handleRetour2}
              clickChanson1 = {this.handleChanson2}
              clickChanson2 = {this.handleChanson3}
              clickChanson3 = {this.handleChanson4}
              src={liste[0].src}  
              titre={liste[0].titre}   
              artiste={liste[0].artiste} 
              chanson1={liste[0].chanson[0]} 
              chanson2={liste[0].chanson[1]}
              chanson3={liste[0].chanson[2]} 
              chanson4={liste[0].chanson[3]}
              chanson5={liste[0].chanson[4]} 
              chanson6={liste[0].chanson[5]}
              chanson7={liste[0].chanson[6]}
              chanson8={liste[0].chanson[7]}
              chanson9={liste[0].chanson[8]} 
              chanson10={liste[0].chanson[9]}
          ></Chansons> 
        );
        }
        else if(this.state.afficherChanson === "2" && this.state.rechercher === ""){  
          return ( 
          <Lyrics 
              retour = {this.handleRetour}
              src={liste[0].src} 
              titre={liste[0].titre}  
              artiste={liste[0].artiste} 
              chanson1={liste[0].chanson[0]} 
              lyrics={liste[0].lyrics}
          ></Lyrics>    
        );
        }
        else if(this.state.afficherChanson === "3" && this.state.rechercher === ""){  
          return(
          <Lyrics 
              retour = {this.handleRetour}
              src={liste[0].src} 
              titre={liste[0].titre}  
              artiste={liste[0].artiste} 
              chanson1={liste[0].chanson[1]} 
              lyrics={liste[0].lyrics2}
          ></Lyrics> 
        );
        }
        else if(this.state.afficherChanson === "4" && this.state.rechercher === ""){  
          return(
          <Lyrics 
              retour = {this.handleRetour}
              src={liste[0].src} 
              titre={liste[0].titre}  
              artiste={liste[0].artiste} 
              chanson1={liste[0].chanson[0]} 
          ></Lyrics> 
        );
        }

/* Album 2 */
        else if(this.state.albums === "2" && this.state.afficherChanson === "1" && this.state.rechercher === ""){  
          return(
          <Chansons 
              retourCatalogue = {this.handleRetour2}
              clickChanson1 = {this.handleChanson5}
              clickChanson2 = {this.handleChanson5}
              clickChanson3 = {this.handleChanson5}
              src={liste[1].src}  
              titre={liste[1].titre}   
              artiste={liste[1].artiste} 
              chanson1={liste[1].chanson[0]} 
              chanson2={liste[1].chanson[1]}
              chanson3={liste[1].chanson[2]} 
              chanson4={liste[1].chanson[3]}
              chanson5={liste[1].chanson[4]} 
              chanson6={liste[1].chanson[5]}
              chanson7={liste[1].chanson[6]}
              chanson8={liste[1].chanson[7]}
              chanson9={liste[1].chanson[8]} 
              chanson10={liste[1].chanson[9]}
          ></Chansons> 
        );
        }
        else if(this.state.afficherChanson === "5" && this.state.rechercher === ""){  
          return(
          <Lyrics 
              retour = {this.handleRetour}
              src={liste[1].src} 
              titre={liste[1].titre}  
              artiste={liste[1].artiste}  
          ></Lyrics> 
        );
        }

/* Album 3 */
        else if(this.state.albums === "3" && this.state.afficherChanson === "1" && this.state.rechercher === ""){  
          return(
          <Chansons 
              retourCatalogue = {this.handleRetour2}
              clickChanson1 = {this.handleChanson6}
              clickChanson2 = {this.handleChanson6}
              clickChanson3 = {this.handleChanson6}
              src={liste[2].src}  
              titre={liste[2].titre}   
              artiste={liste[2].artiste} 
              chanson1={liste[2].chanson[0]} 
              chanson2={liste[2].chanson[1]}
              chanson3={liste[2].chanson[2]} 
              chanson4={liste[2].chanson[3]}
              chanson5={liste[2].chanson[4]} 
              chanson6={liste[2].chanson[5]}
              chanson7={liste[2].chanson[6]}
              chanson8={liste[2].chanson[7]}
              chanson9={liste[2].chanson[8]} 
              chanson10={liste[2].chanson[9]}
          ></Chansons> 
        );
        }
        else if(this.state.afficherChanson === "6" && this.state.rechercher === ""){  
          return(
          <Lyrics 
              retour = {this.handleRetour}
              src={liste[2].src} 
              titre={liste[2].titre}  
              artiste={liste[2].artiste}  
          ></Lyrics> 
        );
        }

/* Album 4 */
        else if(this.state.albums === "4" && this.state.afficherChanson === "1" && this.state.rechercher === ""){  
          return(
          <Chansons 
              retourCatalogue = {this.handleRetour2}
              clickChanson1 = {this.handleChanson7}
              clickChanson2 = {this.handleChanson7}
              clickChanson3 = {this.handleChanson7}
              src={liste[3].src}  
              titre={liste[3].titre}   
              artiste={liste[3].artiste} 
              chanson1={liste[3].chanson[0]} 
              chanson2={liste[3].chanson[1]}
              chanson3={liste[3].chanson[2]} 
              chanson4={liste[3].chanson[3]}
              chanson5={liste[3].chanson[4]} 
              chanson6={liste[3].chanson[5]}
              chanson7={liste[3].chanson[6]}
              chanson8={liste[3].chanson[7]}
              chanson9={liste[3].chanson[8]} 
              chanson10={liste[3].chanson[9]}
          ></Chansons> 
        );
        }
        else if(this.state.afficherChanson === "7" && this.state.rechercher === ""){  
          return(
          <Lyrics 
              retour = {this.handleRetour}
              src={liste[3].src} 
              titre={liste[3].titre}  
              artiste={liste[3].artiste}  
          ></Lyrics> 
        );
        }

/* Album 5 */
        else if(this.state.albums === "5" && this.state.afficherChanson === "1" && this.state.rechercher === ""){  
          return(
          <Chansons 
              retourCatalogue = {this.handleRetour2}
              clickChanson1 = {this.handleChanson8}
              clickChanson2 = {this.handleChanson8}
              clickChanson3 = {this.handleChanson8}
              src={liste[4].src}  
              titre={liste[4].titre}   
              artiste={liste[4].artiste} 
              chanson1={liste[4].chanson[0]} 
              chanson2={liste[4].chanson[1]}
              chanson3={liste[4].chanson[2]} 
              chanson4={liste[4].chanson[3]}
              chanson5={liste[4].chanson[4]} 
              chanson6={liste[4].chanson[5]}
              chanson7={liste[4].chanson[6]}
              chanson8={liste[4].chanson[7]}
              chanson9={liste[4].chanson[8]} 
              chanson10={liste[4].chanson[9]}
          ></Chansons> 
        );
        }
        else if(this.state.afficherChanson === "8" && this.state.rechercher === ""){  
          return(
          <Lyrics 
              retour = {this.handleRetour}
              src={liste[4].src} 
              titre={liste[4].titre}  
              artiste={liste[4].artiste}  
          ></Lyrics> 
        );
        }

/* Album 6 */
        else if(this.state.albums === "6" && this.state.afficherChanson === "1" && this.state.rechercher === ""){  
          return(
          <Chansons 
              retourCatalogue = {this.handleRetour2}
              clickChanson1 = {this.handleChanson9}
              clickChanson2 = {this.handleChanson9}
              clickChanson3 = {this.handleChanson9}
              src={liste[5].src}  
              titre={liste[5].titre}   
              artiste={liste[5].artiste} 
              chanson1={liste[5].chanson[0]} 
              chanson2={liste[5].chanson[1]}
              chanson3={liste[5].chanson[2]} 
              chanson4={liste[5].chanson[3]}
              chanson5={liste[5].chanson[4]} 
              chanson6={liste[5].chanson[5]}
              chanson7={liste[5].chanson[6]}
              chanson8={liste[5].chanson[7]}
              chanson9={liste[5].chanson[8]} 
              chanson10={liste[5].chanson[9]}
          ></Chansons> 
        );
        }
        else if(this.state.afficherChanson === "9" && this.state.rechercher === ""){  
          return(
          <Lyrics 
              retour = {this.handleRetour}
              src={liste[5].src} 
              titre={liste[5].titre}  
              artiste={liste[5].artiste}  
          ></Lyrics> 
        );
        }
        
/* recherche */
        else{
            const searchResult = this.state.listeAlbums.filter(l => l.titre.toLowerCase().includes(this.state.rechercher.toLowerCase()));
    
            return searchResult.map((element, i) => (
                <Albums  
                  onClicked = {this.handleAlbums}
                  src={element.src}  
                  titre={element.titre}  
                  artiste={element.artiste}  
                  id={element.id}  
                 
              ></Albums>
            ));
          }
        }

        AfficherRecherche() {
          return(
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
          );
        }

  render() {
    return (
        <Container>
          {this.AfficherRecherche()}
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

Lyrics.defaultProps = { lyrics: "Ce contenue n'est pas encore disponible !" };