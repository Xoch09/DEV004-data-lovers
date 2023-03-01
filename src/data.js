


const filtroPorTipo = (data, valor) => {
  console.log("data ----> " + data);
  console.log("valor ----> " + valor);
  const filtrarPokemonPorTipo = data.filter((pokemon) => pokemon.type.indexOf(valor) > -1);  ///Electric 
  console.log("variable filtrar pokemon " + filtrarPokemonPorTipo)
  return filtrarPokemonPorTipo;
};


    const estPokemon = (data, valor) =>{
      console.log("data est ----> " + data);  //
      console.log("valor est ----> " + valor);   ///

      const filtrarPokemonPorEst = data.filter((pokemon) => pokemon.type.indexOf(valor) > -1);  ///Electric 
      console.log("variable filtrar pokemon por est -->" + filtrarPokemonPorEst)
      return filtrarPokemonPorEst;

//    const estadisticasPokemon =  data.sort((a, b) => b.base-attack - a.base-attack).slice(0, 10).forEach(data);
//    console.log("variable estadisticas " + estadisticasPokemon)


}



//¿Qué es el índice de búsqueda?
//El índice de búsqueda (IndexOf) es una función de JavaScript que se usa para encontrar la ubicación de un valor en una matriz.
// devuelve la primera posición en la que se encuentra el elemento dado, o -1 si no existe.

//let arreglo = ['Hola', 'Español', 'Adios'];
//let index = arreglo.indexOf('Español') // Devolverá 1








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




export {filtroPorTipo, ordenarPokemon, estPokemon};
