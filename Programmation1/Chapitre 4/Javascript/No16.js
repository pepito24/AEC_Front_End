

var tableau = [1,3,4,5,6,7,8,9,10,11];

var nouveauNombre =Number(prompt("Entrer un nombre "));

for(var i = 0;i < tableau.length;i++){
    for(var j = 0;j < tableau.length;j++){
        if (nouveauNombre > i && nouveauNombre < j){
            tableau.push(nouveauNombre)
        }
    }
}

document.write(tableau);