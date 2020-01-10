
var etudiant = [""];
var notes = [""];


for(var i = 0;i <= 3;i++){
  var nom = prompt("Nom de l'élève");
  var note = Number(prompt("Note de : " + nom));
    etudiant.push(nom + '<br/>');
    notes.push(note + '<br/>')
}

document.write( etudiant + " " + notes);