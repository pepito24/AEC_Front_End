
//pas fini

var nbTrue = 0;
var nbFalse=0;

var tableau = [""];

for(var i = 0;i <= 1000;i++){
    var boolean = Math.random() >= 0.5;
if (boolean === true){
    tableau.push("V");
    nbTrue++;
}
else if (boolean === false){
tableau.push("F");
    nbFalse++;
}

}

document.write(tableau);
document.write("Nombre de faux : " + nbFalse + " nombre de vrai : " + nbTrue);
