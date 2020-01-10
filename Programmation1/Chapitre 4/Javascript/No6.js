

var tableau = [""];

for(var i = 0;i < 10;i++){
    var choix = prompt("Pile ou face");
    tableau.push(choix + '<br/>');
}

document.write(tableau);