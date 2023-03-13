const pokemonData = require('../src/data/pokemon/pokemon.json');
const { filtroPorTipo, filtroPorHuevos, ordenarPokemon} = require('../src/data.js');




describe('filtroPorTipo', () => {

  it('Debería ser una función', () => {
    expect(typeof filtroPorTipo).toBe('function');
  });

  it('Debería retornar un array de objetos', () => {
    expect(Array.isArray(filtroPorTipo(pokemonData.pokemon, "grass"))).toBe(true);
    expect(typeof filtroPorTipo(pokemonData.pokemon, "grass")[0]).toBe('object');
  });

  it('Debería retornar un array de objetos con el tipo "grass"', () => {
    expect(filtroPorTipo(pokemonData.pokemon, "grass")[0].type).toEqual(["grass", "poison"]);
  });

  it('Debería retornar un array de objetos con el tipo "fire"', () => {
    expect(filtroPorTipo(pokemonData.pokemon, "fire")[0].type).toEqual(["fire"]);
  });

  it('Debería retornar un array vacio si no encuentra el tipo', () => {
    expect(filtroPorTipo(pokemonData.pokemon, "agua")).toEqual([]);
  }); 

});


describe('filtroPorHuevos', () => {
    
  it('Debería ser una función', () => {
    expect(typeof filtroPorHuevos).toBe('function');
  });

  it('Debería retornar un array de objetos', () => {
    expect(Array.isArray(filtroPorHuevos(pokemonData.pokemon, "2 km"))).toBe(true);
    expect(typeof filtroPorHuevos(pokemonData.pokemon, "2 km")[0]).toBe('object');
  });

  it('Debería retornar un array de objetos con el huevo "2 km"', () => {
    expect(filtroPorHuevos(pokemonData.pokemon, "2 km")[0].egg).toEqual("2 km");
  });

  it('Debería retornar un array de objetos con el huevo "5 km"', () => {
    expect(filtroPorHuevos(pokemonData.pokemon, "5 km")[0].egg).toEqual("5 km");
  });

  it('Debería retornar un array vacio si no encuentra el huevo', () => {
    expect(filtroPorHuevos(pokemonData.pokemon, "100 km")).toEqual([]);
  });

  



});




describe('ordenarPokemon', () => {
  const dataEjemplo = [
    { name: 'charizard', num: '006' },
    { name: 'pikachu', num: '025' },
    { name: 'squirtle', num: '007' },
    { name: 'bulbasaur', num: '001' },
  ];

  it('Debería ordenar los elementos A-Z', () => {
    const resultadoEsperado = [
      { name: 'bulbasaur', num: '001' },
      { name: 'charizard', num: '006' },
      { name: 'pikachu', num: '025' },
      { name: 'squirtle', num: '007' },
    ];
    expect(ordenarPokemon(dataEjemplo, 'A-Z')).toEqual(resultadoEsperado);
  });

  it('Debería ordenar los elementos Z-A', () => {
    const resultadoEsperado = [
      { name: 'squirtle', num: '007' },
      { name: 'pikachu', num: '025' },
      { name: 'charizard', num: '006' },
      { name: 'bulbasaur', num: '001' },
    ];
    expect(ordenarPokemon(dataEjemplo, 'Z-A')).toEqual(resultadoEsperado);
  });

  it('Debería ordenar los elementos de forma ascendente', () => {
    const resultadoEsperado = [
      { name: 'bulbasaur', num: '001' },
      { name: 'charizard', num: '006' },
      { name: 'squirtle', num: '007' },
      { name: 'pikachu', num: '025' },
    ];
    expect(ordenarPokemon(dataEjemplo, 'ascendente')).toEqual(resultadoEsperado);
  });

  it('Debería ordenar los elementos de forma descendente', () => {
    const resultadoEsperado = [
      { name: 'pikachu', num: '025' },
      { name: 'squirtle', num: '007' },
      { name: 'charizard', num: '006' },
      { name: 'bulbasaur', num: '001' },
    ];
    expect(ordenarPokemon(dataEjemplo, 'descendente')).toEqual(resultadoEsperado);
  });
});





  
 





  
 