const pokemonData = require("../src/data/pokemon/pokemon.json");
const {
  filtroPorTipo,
  ordenarPokemon,
  filtroPorHuevos,
} = require("../src/data.js");

describe("filtroPorTipo", () => {
  it("Debería ser una función", () => {
    expect(typeof filtroPorTipo).toBe("function");
  });

  it("Debería retornar un array de objetos", () => {
    expect(Array.isArray(filtroPorTipo(pokemonData.pokemon, "grass"))).toBe(true);
    expect(typeof filtroPorTipo(pokemonData.pokemon, "grass")[0]).toBe("object");
  });
});

describe("ordenarPokemon", () => {
  const mockData = [
    { name: "squirtle" },
    { name: "charmander" },
    { name: "bulbasaur" },
  ];

  it("Debería ser una función", () => {
    //expect de donde se obtiene el resultado, to be el resultado
    expect(typeof ordenarPokemon).toBe("function");
  });

  it("Debería retornar un array de objetos", () => {
    expect(Array.isArray(ordenarPokemon(mockData, "A-Z"))).toBe(true);
    expect(typeof ordenarPokemon(mockData, "A-Z")[0]).toBe("object");
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
//prueba de prueba
describe("ordenarPokemon", () => {
  const prueba = [
    { num: "001" }, 
    { num: "150" }, 
    { num: "200" }];

  it("Ordenar ascendente", () => {
    ordenarPokemon(prueba, "ascendente");
    expect(prueba[0].num).toBe("001");
    expect(prueba[1].num).toBe("150");
    expect(prueba[2].num).toBe("200");
  });
});

describe("ordenarPokemon", () => {
  const prueba2 = [{ num: "200" }, { num: "150" }, { num: "001" }];

  it("Ordenar descendente", () => {
    ordenarPokemon(prueba2, "descendente");
    expect(prueba2[0].num).toBe("200");
    expect(prueba2[1].num).toBe("150");
    expect(prueba2[2].num).toBe("001");
  });
});

// describe, dice que se va a revisar una función
describe("filtroPorHuevos", () => {
  //lo que se escribe en el it, es un mensaje "debería ser"
  it("Debería ser una función", () => {
    expect(typeof filtroPorHuevos).toBe("function");
  });

  it("Debería retornar un array de objetos", () => {
    expect(filtroPorHuevos(pokemonData.pokemon, "2 km")).toBe("9.16");
  });
  it("Debería retornar un array de objetos", () => {
    expect(filtroPorHuevos(pokemonData.pokemon, "5 km")).toBe("21.12");
  });
  it("Debería retornar un array de objetos", () => {
    expect(filtroPorHuevos(pokemonData.pokemon, "10 km")).toBe("5.58");
  });
  it("Debería retornar un array de objetos", () => {
    expect(filtroPorHuevos(pokemonData.pokemon, "not in eggs")).toBe("60.96");
  });
});





  
 





  
 