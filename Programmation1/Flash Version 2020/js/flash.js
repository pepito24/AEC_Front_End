
let flash = 500;

$( "#boutonGauche" ).click(function() {
flash-=200;
    $('#flashID').css("left" , flash);
});

$( "#boutonDroite" ).click(function() {
    flash+=200;
    $('#flashID').css("left" , flash);
});


$( "#boutonChangerImage" ).click(function() {
    image1 =
    $('#flashID').attr("src" , "img/flash2.png");
});


$( "#boutonEnleverImage" ).click(function() {
    $('#flashID').hide();
});


$( "#boutonAjouterImage" ).click(function() {
    $('#flashID').show();
});


$( "#boutonAjouterAttribut" ).click(function() {
    $('#flashID').attr("alt" , "flash");
});

$( "#boutonAjouterTitre" ).click(function() {
    $('h1').after("<h1 class='text-white'>FLASH EST LA</h1>");
});

$( "#boutonDupliquer" ).click(function() {
    $('#flashID').clone().appendTo("h1");
});


$( "#boutonRalentir" ).click(function() {
    $('#flashID').remove();
});

$( "#boutonTeleport" ).click(function() {
    $('#flashID').hide();
    $('#flashID').show().appendTo("body");
});

var boolDisplay = true;


//$( "#boutonVitesseSupreme" ).click(function() {

 //   if( boolDisplay === true ){
   //     $( "#flashID" ).hide();
    //    boolDisplay = false;
  //  }
   // else {
   //     $( "#flashID" ).show();
  //      boolDisplay = true;
 //   }

//});

$( "#boutonVitesseSupreme" ).click(function() {
    setInterval(function() {
        $("#flashID").fadeOut(100).fadeIn(100);
    }, 1000 );
});

    $("#boutonFinVitesseSupreme").on("click", function(){

    });




$( "#boutonNuke" ).click(function() {
    $('#site').hide();
});