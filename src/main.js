import datos from '../src/data/pokemon/pokemon.js';
import { filtroPorTipo, ordenarPokemon, filtroPorHuevos,  orderByNum } from "./data.js"

const ListaPokemon = datos.pokemon;

const mostrarPokemon = (datosdelpokemon) => {
  const TarjetaPoke = document.getElementById("pokemones");
  datosdelpokemon.forEach((elem) => {     //1
    TarjetaPoke.innerHTML += `
      
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
        

  });
};

mostrarPokemon(ListaPokemon);


let buscarTipo; // creamos variable 
const containerTipo = document.getElementById("tipo"); // creamos variable y llevamos lo que esta dentro de "tipo" en index.html
containerTipo.addEventListener("change", () => {    //   le aplicamos una accion a la variable anterior en el evento cambio (change)
  const verPokemones = document.getElementById("pokemones");  // creamos variable y llevamos lo que esta dentro de "pokemones" en index.html
  verPokemones.innerHTML = " ";   ///
  buscarTipo = containerTipo.value;  /// la informacion filtrada le asiganamos a la variable buscarTipo
  //console.log("var de buscar tipo -> " + buscarTipo);

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
  ordenarPok = containerOrder.value;



  ordenarPokemon(ListaPokemon, ordenarPok);
  mostrarPokemon(ListaPokemon);


});


let huevosTipo; // creamos variable/// null
const containerHuevos = document.getElementById("huevos"); // creamos variable y llevamos lo que esta dentro de "huevos" en index.html  //2km
containerHuevos.addEventListener("change", () => {
  const verHuevosPokemones = document.getElementById("pokemones");
  //const verHuevosPokemonesPorcentaje = document.getElementById("rdoporcentaje");
  verHuevosPokemones.innerHTML = " ";
  //console.log("filtro por HUEVOS ++++ -> " + filtroPorHuevos.length);
  // verHuevosPokemonesPorcentaje.innerHTML =  `<div class="resultado-cantidad">El porcentaje de Pokemones con ${valor}km es de: 1111%</div>`;
  huevosTipo = containerHuevos.value;  ///2 km
  //console.log("var de buscar huevos -> " + huevosTipo);

  if (huevosTipo === "all") {
    mostrarPokemon(ListaPokemon);
  }

  mostrarPokemon(filtroPorHuevos(ListaPokemon, huevosTipo));

});



let searchOrderNum;
const containerOrderNum = document.getElementById("orderNum");
containerOrderNum.addEventListener("change", () => {
  const closePokemones = document.getElementById("pokemones");
  closePokemones.innerHTML = "";
  searchOrderNum = containerOrderNum.value;

  orderByNum(ListaPokemon, searchOrderNum);
  mostrarPokemon(ListaPokemon);
});

