
//var nom1="Tommy";
//var nom1="Eric";
//var nom1="Carina";
//var nom1="Pascal";
//var nom1="Alain";
//var nom1="Denis";
//var nom1="Nadia";
//var nom1="Martin";
//var nom1="olivier";
//var nom1="Benoit";


var reponse = ["Tommy","Erik","Carina","Alain","Billy","Valerie","Nadia","Lidia","Martin","Manon"];
var lettre = [];
var nbPlacer = false;

for(var i = 0;i < reponse.length;i++){
if (reponse[i][0] < reponse[i+1][0])
    lettre.push(reponse[i][0]);
}


document.write(lettre);