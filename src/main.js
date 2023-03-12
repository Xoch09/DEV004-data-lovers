import datos from "../data/pokemon/pokemon.js";
import { filtroPorTipo, ordenarPokemon, filtroPorHuevos } from "./data.js";

//objeto con data de Pokemones, data guardada en ListaPokemon
const ListaPokemon = datos.pokemon;
//objeto con función de flecha para imprimir los Pokemones en el DOM
const mostrarPokemon = (datosdelpokemon) => {
  const TarjetaPoke = document.getElementById("pokemones");
  //Por cada elemento de datos pokemos se va a imprimir todo lode abajo inner
  datosdelpokemon.forEach((elem) => {
    //template literal, para imprimir varios string
    TarjetaPoke.innerHTML += ` 
      
    <div class="card-container">
    <div id="card" class="card">
      <div id="front" class="front">
        <div class="title">${elem.name.toUpperCase()}</div>
        <div class="numberTitle">#${elem.num}</div>
        <img class="picture" src=" ${elem.img}" />
      </div>

      <div id="back" class="back">
        <div class="infCardAbout">${elem.about}</div>
        <div class="infCardAbout">
          Generación:<br />${elem.generation.name}
        </div>
        <div class="infCardAbout">Tipo de Huevo<br />${elem.egg}</div>
        <div class="infCardAbout infCard"
          Fortalezas<br />${elem.resistant.join(", ")}
        </div>
      </div>
    </div>
  </div>
   
  `;
    //.join, por cada resistencia va a imprimir una coma y un espacio
    //touprcase mayusculas
  });
};
//vuelve a llamar la función con el objetode data como parametro
mostrarPokemon(ListaPokemon);

// variables globales
let buscarTipo;
const containerTipo = document.getElementById("tipo"); // creamos variable y llevamos lo que esta dentro de "tipo" en index.html
// en el contenedor, caja,lo llama y selecciona
containerTipo.addEventListener("change", () => {
  //   le aplicamos una accion a la variable anterior en el evento cambio (change)
  const verPokemones = document.getElementById("pokemones"); // creamos variable y llevamos lo que esta dentro de "pokemones" en index.html
  verPokemones.innerHTML = " "; ///Reinicia el conteo de los poquemones, que no se junte la data con los 250 de antes y los nuevos 250
  buscarTipo = containerTipo.value; /// la informacion filtrada le asiganamos a la variable buscarTipo

  if (buscarTipo === "all") {
    mostrarPokemon(ListaPokemon);
  }

  mostrarPokemon(filtroPorTipo(ListaPokemon, buscarTipo));
});

let ordenarPok;
const containerOrder = document.getElementById("order");
containerOrder.addEventListener("change", () => {
  const verPokemones = document.getElementById("pokemones");
  verPokemones.innerHTML = "";
  //LA VARIABLE GLOBAL SE inicializa con el order de html
  ordenarPok = containerOrder.value;

  ordenarPokemon(ListaPokemon, ordenarPok);
  mostrarPokemon(ListaPokemon);
});

let huevosTipo;
const containerHuevos = document.getElementById("huevos"); // creamos variable y llevamos lo que esta dentro de "huevos" en index.html  //2km
containerHuevos.addEventListener("change", () => {
  huevosTipo = containerHuevos.value;
  const verHuevosPokemones = document.getElementById("pokemones");
  const verHuevosPokemonesPorcentaje =
    document.getElementById("resultado-cantidad");
  verHuevosPokemones.innerHTML = " ";
  //console.log("filtro por HUEVOS ++++ -> " + filtroPorHuevos.length);
  verHuevosPokemonesPorcentaje.innerHTML =
    "El porcentaje de Pokemones con " +
    huevosTipo +
    " km  es de: " +
    filtroPorHuevos(ListaPokemon, huevosTipo) +
    " % ";
  ///2 km
  //console.log("var de buscar huevos -> " + huevosTipo);
});
