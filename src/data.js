const filtroPorTipo = (data, valor) => {
  console.log("data ----> " + data);
  console.log("valor ----> " + valor);
  const filtrarPokemonPorTipo = data.filter((pokemon) => pokemon.type.indexOf(valor) > -1);  ///Electric 
  console.log("variable filtrar pokemon " + filtrarPokemonPorTipo)
  return filtrarPokemonPorTipo;
};


const ordenarPokemon = (data, valor) => {
  if (valor === "A-Z") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    data.sort((a, b) => b.name.localeCompare(a.name));
  }
};

const filtroPorHuevos = (data, valor) => {   // data es toda la data pokemon ---  valor es 2km
  console.log("data ----> " + data);
  console.log("valor ----> " + valor);   
  const filtrarPokemonPorHuevos = data.filter((pokemon) => pokemon.egg === valor);  /// aqui van los 23 resultdos
  console.log("variable filtrar huevos  pokemon " + filtrarPokemonPorHuevos)
  const verHuevosPokemonesPorcentaje = document.getElementById("rdoporcentaje"); 
  verHuevosPokemonesPorcentaje.innerHTML =  `<div class="resultado-cantidad">El porcentaje de Pokemones con ${valor} es de: ${((filtrarPokemonPorHuevos.length / 251) * 100).toFixed(2)}%</div>`;
                                                                                                              //2km                    ( //23          /    251) * 100 = 9,16%
  return filtrarPokemonPorHuevos;
};


export {filtroPorTipo, ordenarPokemon, filtroPorHuevos};

