
var nombre = [];

for(var i = 0;i < 10;i++){
    nombre[i] = Number(prompt("Écrire un chiffre entre 1 et 10" ));
}


document.write("le plus grand nombre est : " + Math.max(...nombre) + '<br/>' );
document.write("le plus petit nombre est : " +Math.min(...nombre) + '<br/>');
