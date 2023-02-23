const filtroPorTipo = (data, valor) => {
    const filtrarPokemonPorTipo = data.filter((pokemon) => pokemon.type.indexOf(valor.toLowerCase()) > -1);
    return filtrarPokemonPorTipo;
  };
export {filtroPorTipo}
;
   