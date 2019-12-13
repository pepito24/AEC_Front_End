

var conteur =0;
var patate1 = prompt("Écrivez un mot");

while (patate1 !="patate"){
    patate1 = prompt("Écrivez un mot");
  conteur++;
}

document.write(conteur);