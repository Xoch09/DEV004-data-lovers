const filtroPorTipo = (data, valor) => {
  const filtrarPokemonPorTipo = data.filter((pokemon) => pokemon.type.indexOf(valor.toLowerCase()) > -1);
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
  verHuevosPokemonesPorcentaje.innerHTML = `>div class="resultado-cantidad"> El porcentaje de pokemones con ${valor}es de;${((firtrarPokemonPorHuevos.length /251) *100).toFixed(2)}%</div>`;
  return filtrarPokemonPorHuevos;
};
  /*xoch
  const eggPokemon = (data, valor) => {
    if (valor == "not in eggs") {
      return eggPokemon ;
    } else {
      return ("2 km");
    }
  };*/
  
  
  
export {filtroPorTipo, ordenarPokemon, filtroPorHuevos};

