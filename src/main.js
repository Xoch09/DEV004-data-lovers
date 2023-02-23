import datos from '../src/data/pokemon/pokemon.js';  
import {filtroPorTipo, ordenarPokemon} from "./data.js"

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
  ;

    });
  };
  
  mostrarPokemon(ListaPokemon);

   //Filtrar según tipo
//innerHTML vacio reemplaza todo el contenido por un contenido a definir
 
let buscarTipo; // creamos variable 
const containerTipo = document.getElementById("tipo"); // creamos variable y llevamos lo que esta dentro de "tipo" en index.html
containerTipo.addEventListener("change", () => {    //   le aplicamos una accion a la variable anterior en el evento cambio (change)
const verPokemones = document.getElementById("pokemones");  // creamos variable y llevamos lo que esta dentro de "pokemones" en index.html
verPokemones.innerHTML = " ";   ///
buscarTipo = containerTipo.value;  /// la informacion filtrada le asiganamos a la variable buscarTipo

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

