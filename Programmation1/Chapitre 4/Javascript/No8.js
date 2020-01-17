
var etudiant = [];
var notes = [];
var total = 0;

for(var j = 0;j < 5;j++){
    etudiant[j] = prompt("Nom : ");
  notes[j] = Number(prompt("Note de : "));
  total+= notes[j];
}

var moyenne = total / 5;


for (var i = 0;i < 5;i++){
    if(notes[i] > moyenne ){
        document.write(notes[i] + " %" + " Étudiant " + etudiant[i] + '<br/>')
    }
    else{
        document.write();
    }

}





