
//mot
var str = "";

$("#btn").click(function(){
    str = $("#inpt").val();
    console.log(str.length);
    //for(var j=0;j<=str.length;j++) {
      //  console.log(str[j]);
    //}
    alert(str);
});


//changement fond
$( "#red" ).click(function() {
    $('.section2').css("background-image" , "url(\"background/rouge.jpg\")");
});
$( "#rose" ).click(function() {
    $('.section2').css("background-image" , "url(\"background/rose.jpg\")");
});
$( "#noir" ).click(function() {
    $('.section2').css("background-image" , "url(\"background/noir.jpg\")");
});
$( "#gris" ).click(function() {
    $('.section2').css("background-image" , "url(\"background/gris.jpg\")");
});
$( "#bleuFonce" ).click(function() {
    $('.section2').css("background-image" , "url(\"background/bleuFonce.jpg\")");
});
$( "#bleu" ).click(function() {
    $('.section2').css("background-image" , "url(\"background/bleu.jpg\")");
});
$( "#blanc" ).click(function() {
    $('.section2').css("background-image" , "url(\"background/blanc.jpg\")");
});



///changer les images
let premierClick = true;
let modalShow = false;
let idImage1;
let idImage2;
let srcImage1;
let srcImage2;

$('.lettre').click(function() {
    if(premierClick){
        idImage1 = $(this).attr("id");
        srcImage1 = $(this).attr("src");
        premierClick = false;
        $('#modal').modal('show');
        modalShow = true;
        if (modalShow = true){
            $('#img1').attr("src","Letters/" + (srcImage1[8]) + "/" + (srcImage1[8]) + "1.jpg");
            $('#img2').attr("src","Letters/" + (srcImage1[8]) + "/" + (srcImage1[8]) + "2.jpg");
            $('#img3').attr("src","Letters/" + (srcImage1[8]) + "/" + (srcImage1[8]) + "3.jpg");
            $('#img4').attr("src","Letters/" + (srcImage1[8]) + "/" + (srcImage1[8]) + "4.jpg");
            $('#img5').attr("src","Letters/" + (srcImage1[8]) + "/" + (srcImage1[8]) + "5.jpg");
        }
        modalShow = false;
    }
    else{
        idImage2 = $(this).attr("id");
        srcImage2 = $(this).attr("src");
        $('#modal').modal('hide');
        $("#" + idImage1).attr("src",srcImage2);
        $("#" + idImage2).attr("src",srcImage1);
        premierClick = true;
    }

});



//for (var i=0;i<=5;i++){

