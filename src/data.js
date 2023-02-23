const filtroPorTipo = (data, valor) => {
  const filtrarPokemonPorTipo = data.filter((pokemon) => pokemon.type.indexOf(valor.toLowerCase()) > -1);
  return filtrarPokemonPorTipo;
};

//El método filter() crea un nuevo array con todos los elementos
//que cumplan la condición implementada por la función dada.
//5 venenos
const ordenarPokemon = (data, valor) => {
  if (valor === "A-Z") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    data.sort((a, b) => b.name.localeCompare(a.name));
  }
};




export {filtroPorTipo, ordenarPokemon};
