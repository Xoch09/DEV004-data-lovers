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
  
  /*xoch*/
  const eggPokemon = (data, valor) => {
    if (valor == "not in eggs") {
      return eggPokemon ;
    } else {
      return ("2 km");
    }
  };
  
  
  
  export {filtroPorTipo, ordenarPokemon, eggPokemon};

