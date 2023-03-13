const filtroPorTipo = (data, tipo) => { // recibe la data y el value: water
  const pokemonesFiltrados = data.filter((pokemon) => pokemon.type && pokemon.type.includes(tipo)); // filtra la data por el value: water
  return pokemonesFiltrados;
};


const ordenarPokemon = (data, valor) => { // recibe la data y el value: A-Z
  if (valor === "A-Z") {
    data.sort((a, b) => a.name.localeCompare(b.name)); // ordena la data de la A a la Z
  } else if (valor === "Z-A") {
    data.sort((a, b) => b.name.localeCompare(a.name));
  } else if (valor === "ascendente") {
    data.sort((a, b) => a.num - b.num);
  } else if (valor === "descendente") {
    data.sort((a, b) => b.num - a.num);
  }
  
  return data;
};


const filtroPorHuevos = (data, valor) => {  // recibe la data y el value: 2km
  const filtrarPokemonPorHuevos = data.filter((pokemon) => pokemon.egg === valor); // filtra la data por el value: 2km
  return filtrarPokemonPorHuevos;
};


export { filtroPorTipo, ordenarPokemon, filtroPorHuevos };
























