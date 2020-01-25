

var options = ["INFORMATIQUE","WEB","RESEAUTIQUE","CSS"];
var choix = prompt("Entrez une option pour valider si le cours est offert : ").toUpperCase();
var trouver = false;

for(var i =0;i<options.length;i++){
    if (choix === options[i]){
        trouver = true;
    }
}

if(trouver){
    console.log("Le cours est offert");
}
else{
    console.log("Le cours n'est pas offert");
}
