

var options = ["informatique", "administration", "histoire","génie", "géographie", "bureautique"];

for(var i = 0;i < options.length;i++){
    var demande = prompt("Entrer un option de cours : ");
    if (demande === options[0] || demande === options[1] || demande === options[2] || demande === options[3] || demande === options[4] || demande === options[5]){
     document.write("OUI" + '<br/>')
    }
    else{
        document.write("NON" + '<br/>')
    }
}