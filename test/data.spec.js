const pokemonData = require('../src/data/pokemon/pokemon.json');
const { filtroPorTipo, ordenarPokemon, filtroPorHuevos  } = require('../src/data.js');



describe('filtroPorTipo', () => {

  it('Debería ser una función', () => {
    expect(typeof filtroPorTipo).toBe('function');
  });

  it('Debería retornar un array de objetos', () => {
    expect(Array.isArray(filtroPorTipo(pokemonData.pokemon, "grass"))).toBe(true);
    expect(typeof filtroPorTipo(pokemonData.pokemon, "grass")[0]).toBe('object');
  });

  
});


describe('ordenarPokemon', () => {
  const mockData = [
    { name: "squirtle" },
    { name: "charmander" },
    { name: "bulbasaur" },
  ];

  it('Debería ser una función', () => {
    expect(typeof ordenarPokemon).toBe('function');
  });

  it('Debería retornar un array de objetos', () => {
    expect(Array.isArray(ordenarPokemon(mockData, "A-Z"))).toBe(true);
    expect(typeof ordenarPokemon(mockData, "A-Z")[0]).toBe('object');
  });

  it("Ordenar de la A a la Z", () => {
    ordenarPokemon(mockData, "A-Z");
    expect(mockData[0].name).toBe("bulbasaur");
    expect(mockData[1].name).toBe("charmander");
    expect(mockData[2].name).toBe("squirtle");
  });

  it("Ordenar de la Z a la A", () => {
    ordenarPokemon(mockData, "Z-A");
    expect(mockData[0].name).toBe("squirtle");
    expect(mockData[1].name).toBe("charmander");
    expect(mockData[2].name).toBe("bulbasaur");
  });

});

describe('filtroPorHuevos', () => {
  it('Debería ser una función', () => {
    expect(typeof filtroPorHuevos).toBe('function');
  });
  
  it('Debería retornar un array de objetos', () => {
    expect(filtroPorHuevos(pokemonData.pokemon, "2 km")).toBe('9.16');
  });
});

