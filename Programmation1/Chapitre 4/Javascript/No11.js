

var nbEnfant = [];
var nbFamille = 0;

for(var i = 0;i < 10;i++){
    nbEnfant[i] = Number(prompt("Combien avez-vous d'enfant ? " ));
}

for (var j = 0;j < 10;j++){
    if(nbEnfant[j] > 10 ){
        nbFamille++;
    }
    else{
        document.write();
    }

}

document.write("Il y a " + nbFamille + " qui on 10 enfants ou plus" + '<br/>');

