const filtroPorTipo = (data, valor) => {
 const filtrarPokemonPorTipo = data.filter((pokemon) => pokemon.type.indexOf(valor.tolowerCase())> -1);
 return FiltrarPokemonPorFiltro;   
};

export {filtroPorTipo};

   