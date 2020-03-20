/**
 * Created by Shany on 2020-02-20.
*/
$('.selectDC').hide();
$('.selectMarvel').hide();
$('.selectSW').hide();



var $univers = $('input[name="radioUnivers"]');

$univers.change(function() {
    let radioValue = $("input[name='radioUnivers']:checked").val();  //si le petit rond est cocher
    if(radioValue === "sw"){  // si sw qui egale la value est cocher ect ...
        $('.selectDC').hide();
        $('.selectMarvel').hide();
        $('.selectSW').show();
    }
    else if(radioValue === "dc"){
        $('.selectDC').show();
        $('.selectMarvel').hide();
        $('.selectSW').hide();
    }
    else if(radioValue === "marvel"){
        $('.selectDC').hide();
        $('.selectMarvel').show();
        $('.selectSW').hide();
    }

});




$( "#swSelect" ).change(function() {
    let perso = $( "#swSelect option:selected" ).text();
    if(perso === "Obiwan"){
        $("#personnage").attr("src","img/billGates.jpg");
    }
    else if(perso === "Darth Vader"){
        $("#personnage").attr("src","img/billGates2.jpg");
    }
});

$( "#boutonEnvoyer" ).click(function() {
    $('#idContainer').hide();
});

