

$('#Starwars1').hide();
$('#Marvel1').hide();
$('#DC1').hide();
$('#img1').hide();
$('#img2').hide();
$('#img3').hide();


$( "#off" ).click(function() {

    $('#Starwars1').hide();
    $('#Marvel1').hide();
    $('#DC1').hide();
    $('#img1').hide();
});


$( "#starwars" ).click(function() {
    $('#Starwars1').show();
    $('#Marvel1').hide();
    $('#DC1').hide();
    $('#img1').attr("src" , "img/MP-YodaSpecies.png");
    $('#img1').show();

});


$( "#marvel" ).click(function() {
    $('#Marvel1').show();
    $('#Starwars1').hide();
    $('#DC1').hide();
    $('#img1').attr("src" , "img/6000197674323.jpg");
});

$( "#dc" ).click(function() {
    $('#DC1').show();
    $('#Starwars1').hide();
    $('#Marvel1').hide();
    $('#img1').attr("src" , "img/Batman_(circa_2016).png");
});


$( "#Starwars1" ).change(function() {

});
