



var celsius = 0;

for(var i = -40;i <= 40;i+=5){

    celsius = ((i - 32) /1.8);
    document.write("Fahrenheight = " + i + " Celcius = " + celsius +  '<br/>');
}