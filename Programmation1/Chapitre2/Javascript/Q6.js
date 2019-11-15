
var note;

note = Number(prompt("Ecrit un note sur 100"));

if (note >= 90 ) {
    document.write("A")
}

else if (note >= 80 ) {
    document.write("B")
}

else if (note >= 70) {
    document.write("C")
}

else if (note >= 60) {
    document.write("D")
}

else if (note < 60) {
    document.write("E")
}