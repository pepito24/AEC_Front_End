
var trancheAge = "";
var age = Number(prompt("Entrer votre âge :"));

if (age >= 0 && age <= 12){
    trancheAge = "Votre tranche d'âge est : Enfant";
}
else if (age >= 13 && age <= 17){
    trancheAge = "Votre tranche d'âge est : Adolescent"
}
else if (age >= 18 && age <= 54){
    trancheAge = "Votre tranche d'âge est : Adulte"
}
else if (age >= 55){
    trancheAge = "Votre tranche d'âge est : Senior"
}
else{
   trancheAge = ("Pas encore né");
}

document.write(trancheAge);