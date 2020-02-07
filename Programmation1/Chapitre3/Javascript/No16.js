// pas fini

var gagnier = 0;
var perdu = 0;


    var nombreAleatoire = Math.floor(Math.random() *2);
   var nombre1 = prompt("Entrer un nombre entre 0 et 1 ");
if (nombreAleatoire === nombre1){
    gagnier++;
}
else{
    perdu++;
   }

}

document.write(" Vous avez perdu : " + perdu + " fois !" + '<br/>');
document.write("Vous avez gagner : " + gagnier + " fois !");
