import datos from '../src/data/pokemon/pokemon.js';  

const ListaPokemon = datos.pokemon.slice(0,30);  

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


