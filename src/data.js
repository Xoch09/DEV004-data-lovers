const filtroPorTipo = (pokemones, tipo) => {
  // const pokemonesArray = Object.values(pokemones);
  const pokemonesFiltrados = pokemones.filter((pokemon) => pokemon.type && pokemon.type.includes(tipo));
  return pokemonesFiltrados;
};
//variable global
let porcentaje;
const filtroPorHuevos = (data, valor) => {
  //filter devuelve un array nuevo, en el return
  const filtrarPokemonPorHuevos = data.filter((pokemon) => pokemon.egg === valor);
  //valor, lo que selecciona all, 2km etc.
  if (valor === "all") {
    return filtrarPokemonPorHuevos;
  } else if (valor === "2 km") {
    porcentaje = ((filtrarPokemonPorHuevos.length / data.length) * 100) //regla de 3
      //LO DA EN 2 DECIMALES
      .toFixed(2);
  } else if (valor === "5 km") {
    porcentaje = ((filtrarPokemonPorHuevos.length / data.length) * 100).toFixed(2);
  } else if (valor === "10 km") {
    porcentaje = ((filtrarPokemonPorHuevos.length / data.length) * 100).toFixed(2);
  } else if (valor === "not in eggs") {
    porcentaje = ((filtrarPokemonPorHuevos.length / data.length) * 100).toFixed(2);
  }

  //retorna el nuevo array

  return porcentaje;
};
//valor, las opciones que aparecen en el contenedor / data todos los pokemones
const ordenarPokemon = (data, valor) => {
  if (valor === "A-Z") {
    //ordenar, comparando entre a y b, con el localcompare se ordena respetando caracteres especiales, dieresis, acentos etc.
    data.sort((a, b) => a.name.localeCompare(b.name));
  } else if (valor === "Z-A") {
    data.sort((a, b) => b.name.localeCompare(a.name));
  } else if (valor === "ascendente") {
    //ordenar, comparando entre a y b por número de pokemon
    data.sort((a, b) => a.num - b.num);
  } else if (valor === "descendente") {
    data.sort((a, b) => b.num - a.num);
  }
  //regresa la data ya ordenada, pejem. de seleccionar de la A a la Z, devuelve return data ordenada
  return data;
};

export { filtroPorTipo, ordenarPokemon, filtroPorHuevos };
























