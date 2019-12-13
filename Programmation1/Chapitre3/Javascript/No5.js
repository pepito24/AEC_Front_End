var conteur1 = 0;
var conteur2 = 0;
var nombreAleatoire = 0;

for(var i = 0;i < 100;i++){
    nombreAleatoire = Math.floor(Math.random() *2 );
    if (nombreAleatoire === 1){
        conteur1++;
    }
    else{
        conteur2++;
    }

   document.write(nombreAleatoire + '<br/>');

}

document.write(conteur1+ '<br/>');
document.write(conteur2);