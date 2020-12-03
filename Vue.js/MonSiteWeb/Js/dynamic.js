
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };








// --------- de base ------------- //

var app = new Vue({   // on peu mettre le nom de variable que l'on veux
    el: '#app',       //nom ID qui sera appeler dans le html ( ID unique)
    data: {
        message: 'State Of Decay'  // message a afficher dans le html Ex: <div id="app">{{ message }}</div>
        // app.message = "State Of Decay"   
    }
})






// --------- avec template ------------- //

var nom2 = new Vue({
    el: '#nom2',
    template: '<h1>{{ message }}</h1>',  // comment sa va appraitre dans le html
    data: {
        message: 'Paquet'
    }
})


var nom23 = new Vue({
  el: '#nom23',
  template: '<h1>{{ message }}</h1>',  // comment sa va appraitre dans le html
  data: {
      color: 'red'  //  red est le nom de la class (sass)
  }
})


// --------- avec une fonction et plusieurs informations ------------- //

var exercice = new Vue({
  el: '#exercice',
  data: {
      firstname: "Erik",
      lastname: "Paquet",    // ont peu mettre plusieurs message ou informations , tableau ect ...
      titre: "Welcome !",
      message: "Salut!"
  },
  methods: {                 // pour mettre des fonctions ou javascript on n'appelle comme ca dans le html {{ mydetails() }}
    mydetails: function () {
      return("I am " + this.firstname + " " + this.lastname );
    },

  },

})



// --------- propriétés combinées ------------- //

var vm = new Vue({
  el: "#app4",
  data: {
    nombre: 4
  },
  computed: {      // pour calculer des trucs
    moncalcul: function () {
      return this.nombre + 10;     // est appeler comme ca dans le html <h1>{{moncalcul}}</h1>

    },
  },
});

var tx = new Vue({
  el: "#app5",
  data: {
    celsius: 4,
    color: "red",  //  <h1 v-bind:class="color"> Fahrenheit: {{ moncalcul2 }}</h1>
  },
  computed: {     
    moncalcul2: function () {
      return this.celsius * 9/5 + 32;     // est appeler comme ca dans le html <h1>{{moncalcul}}</h1>

    },
  },
});


var tx6 = new Vue({
  el: "#app6",
  data: {
    firstname: "Erik",
  },
  computed: {      // ajit sur une propri/t/ exemple firstname (firstname est modifier la)
    moncalcul24() {
     
    },
  },
});

// --------- boucle for ------------- //


const app7 = new Vue({
  el: "#app7",
  data: {
    shoppingCart: [
      { label: "Pommes", cost: 6 },
      { label: "Bananes", cost: 2 },
      { label: "Noix de coco", cost: 8 },
    ],
  },
});


var app10 = new Vue({
  el: "#app10",
  data: {
    celsius: 4,
    faren: false,
  },
  computed: {     
    moncalcul23: function () {
      var far= this.celsius * 9/5 + 32;
      return far;    
    },
    }
});

function convertiseur() {
  return nombre * nombre;
}



var app11 = new Vue({
  el: "#app11",
  data: {
    rouge: "red"
  },
  computed: {     
    moncalcul24: function () {
      return far;    
    },
  },
});