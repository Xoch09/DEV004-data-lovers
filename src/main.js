import datos from '../src/data/pokemon/pokemon.js';  
import {filtroPorTipo, ordenarPokemon, filtroPorHuevos } from "./data.js"

const ListaPokemon = datos.pokemon; // toda la data de pokemon.js
//const pokemonArray = Object.values(ListaPokemon); // convertimos la data en un array


// ********************************************************************
// 1. Mostrar todos los pokemones en la pantalla

const mostrarPokemon = (datosdelpokemon) => { // 2. creamos funcion para mostrar los pokemones
  const TarjetaPoke = document.getElementById("pokemones"); // 3. creamos variable y llevamos lo que esta dentro de "pokemones" en index.html
  datosdelpokemon.forEach((elem) => {   // 4. recorremos el array de pokemon
    TarjetaPoke.innerHTML += `  <!-- 5. creamos el html que se va a mostrar en la pantalla-->
      
      <div class="card-container">  <!-- cuadro grande -->
            <div id="card" class="card">   <!-- cuadro tarjeta-->

                <div id="front" class="front">   <!-- lado a tarjeta frente-->
                    <div class="title"> ${elem.name.toUpperCase()}</div>  <!--  paselo a mayusculas--> 
                    <div class="numberTitle">#${elem.num}</div>
                    <img class="picture" src=" ${elem.img}"></img>
                </div>

                <div id="back" class=" back">  <!-- lado b tarjeta atras-->
                        <div class="infCardAbout">${elem.about}</div> 
                        <div class="infCardAbout"<br>Generación:<br>${elem.generation.name}</div> 
                        <div class="infCardAbout">Tipo de Huevo<br>${elem.egg}</div>
                        <div class="infCardAbout infCard">Fortalezas<br>${elem.resistant.join(", ")}</div>  
                </div>
             </div>
     </div>
   
  `
    ;

  });
};
  
mostrarPokemon(ListaPokemon);

// ********************************************************************


 
let buscarTipo; // creamos variable/// null
const containerTipo = document.getElementById("tipo"); // creamos variable y llevamos lo que esta dentro de "tipo" en index.html  //2km
containerTipo.addEventListener("change", () => {  // creamos evento para que se ejecute cuando se cambie el valor de "tipo"
  const verPokemones = document.getElementById("pokemones"); // creamos variable y llevamos lo que esta dentro de "pokemones" en index.html
  verPokemones.innerHTML = " ";  // limpiamos el html
  buscarTipo = containerTipo.value; // traemos el value: water

  if (buscarTipo === "all") { // si el value es "all" entonces mostramos todos los pokemones
    mostrarPokemon(ListaPokemon); // llamamos a la funcion mostrarPokemon y le pasamos la data de pokemon.js
  }

  mostrarPokemon(filtroPorTipo(ListaPokemon, buscarTipo)); // llamamos a la funcion mostrarPokemon y le pasamos la data de pokemon.js y el value: water
});     



let ordenarPok; // creamos variable /// null
const containerOrder = document.getElementById("order"); // creamos variable y llevamos lo que esta dentro de "order" en index.html
containerOrder.addEventListener("change", () => {
  const verPokemones = document.getElementById("pokemones");
  verPokemones.innerHTML = "";
  ordenarPok = containerOrder.value;  // traemos el value: A-Z

  mostrarPokemon(ordenarPokemon(ListaPokemon, ordenarPok)); // llamamos a la funcion mostrarPokemon y le pasamos la data de pokemon.js y el value: A-Z
});



let huevosTipo; // creamos variable/// null
const containerHuevos = document.getElementById("huevos"); // creamos variable y llevamos lo que esta dentro de "huevos" en index.html  //2km
containerHuevos.addEventListener("change", () => { // creamos evento para que se ejecute cuando se cambie el valor de "huevos"
  const verHuevosPokemones = document.getElementById("pokemones"); // creamos variable y llevamos lo que esta dentro de "pokemones" en index.html
  verHuevosPokemones.innerHTML = " "; // limpiamos el html
  huevosTipo = containerHuevos.value;  // traemos el value: 2km
 

  if (huevosTipo === "all") {
    mostrarPokemon(ListaPokemon);
  }

  mostrarPokemon(filtroPorHuevos(ListaPokemon, huevosTipo));

});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const estad_selec = document.getElementById("estadisticas"); // 1. creamos variable y llevamos lo que esta dentro de "estadisticas" en index.html
const estad_Info = document.getElementById("info-estad"); // 2. creamos variable y llevamos lo que esta dentro de "info-estad" en index.html

estad_selec.addEventListener("change", (evento) => {
  const estad_tipo = evento.target.value; // 3. creamos variable y traemos el value: total

  if (estad_tipo === "total") { // 4. si el value es "total" entonces mostramos el total de pokemones
    estad_Info.textContent = `Hay un total de ${ListaPokemon.length} Pokémons en la lista.`; // 4. mostramos el total de pokemones
  }

  else if (estad_tipo === 'eggs') { // si el value es "eggs" entonces mostramos el porcentaje de pokemones por tipo de huevo
    const tipoHuevos = ['2 km', '5 km', '10 km', 'not in eggs']; // creamos array con los tipos de huevos
    let huevosInner = '';  // creamos variable vacia
    for (let i = 0; i < tipoHuevos.length; i++) {  // recorremos el array de tipoHuevos
      const filtradodePokemons = filtroPorHuevos(ListaPokemon, tipoHuevos[i]); // creamos variable y llamamos a la funcion filtroPorHuevos y le pasamos la data de pokemon.js y el value: 2km
      const porcentaje = ((filtradodePokemons.length / ListaPokemon.length) * 100).toFixed(2); 
      //                         23                  / 251           * 100 =    9.16
      huevosInner += `${tipoHuevos[i]}: ${porcentaje}%<br>`;
      //                  2km          :    9.16      %
    }
    estad_Info.innerHTML = huevosInner;  // mostramos el porcentaje de pokemones por tipo de huevo
  }
  else if (estad_tipo === '') { // si el value es "" entonces mostramos nada
    estad_Info.textContent = ''; // mostramos nada
  } 


});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



