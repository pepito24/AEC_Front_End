

var tabChance = [];
var reponse = 0;

for(var i=0;i<=100;i++){
    var nb = Math.floor(Math.random() * 100) + 1;
    tabChance.push(nb);
}

var usager = Number(prompt(" Entrer un numero entre 1 et 200 : "));


for(var j=0;j <tabChance.length;j++){
    if (usager === tabChance[j]){
        reponse++;
    }
}

if (reponse >= 1){
    document.write("<br>" + "Vous avez entrer le numero : " + usager + " et  Oui! Le numero est dans le tableau");
}
else{
    document.write("<br>" + "Vous avez entrer le numero : " + usager + " et  Non ! Le numero n'est pas dans le tableau");
}



