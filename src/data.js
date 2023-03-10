



const filtroPorTipo = (data, valor) => {
  //console.log("data ----> " + data);
  //console.log("valor ----> " + valor);
  const filtrarPokemonPorTipo = data.filter((pokemon) => pokemon.type.indexOf(valor) > -1);  ///Electric 
  //console.log("variable filtrar pokemon " + filtrarPokemonPorTipo)
  return filtrarPokemonPorTipo;
};


const ordenarPokemon = (data, valor) => {
  if (valor === "A-Z") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    data.sort((a, b) => b.name.localeCompare(a.name));
  }
};

const filtroPorHuevos = (data, valor) => {  
  const filtrarPokemonPorHuevos = data.filter((pokemon) => pokemon.egg === valor);  
  const verHuevosPokemonesPorcentaje = document.getElementById("rdoporcentaje");
  verHuevosPokemonesPorcentaje.innerHTML = `<div class="resultado-cantidad">El porcentaje de Pokemones con ${valor} es de: ${((filtrarPokemonPorHuevos.length / 251) * 100).toFixed(2)}%</div>`;
  return filtrarPokemonPorHuevos;
};

// const orderByNum = (data, valor) => {
//   if (valor === "0-9") {
//     data.sort((a, b) => {
//       if (a.num > b.num) {
//         return 1;
//       } else if (a.num < b.num) {
//         return -1;
//       } else if (a.num === b.num) {
//         return 0;
//       }
//     });
//   } else {
//     data.sort((a, b) => {
//       if (a.num < b.num) {
//         return 1;
//       } else if (a.num > b.num) {
//         return -1;
//       } else if (a.num === b.num) {
//         return 0;
//       }
//     });
//   }
// };


// const orderByNum = (data, option) => {
//   let sortedData = [];

//   if (option === "name") { // Ordenar por nombre
//     sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (option === "num_asc") { // Ordenar por número ascendente
//     sortedData = data.sort((a, b) => Number(a.num) - Number(b.num));
//   } else if (option === "num_desc") { // Ordenar por número descendente
//     sortedData = data.sort((a, b) => Number(b.num) - Number(a.num));
//   }

//   return sortedData;
// }


const orderByNum = (data, valor) => {
  const compareFn = (a, b) => {
    if (valor === "0-9") {
      return a.num - b.num;
    } else {
      return b.num - a.num;
    }
  };
  
  data.sort(compareFn);
};



export { filtroPorTipo, ordenarPokemon, filtroPorHuevos,  orderByNum};

