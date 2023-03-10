import {
  filtroPorTipo,  ordenarPokemon, orderByNum, filtroPorHuevos,
} from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';



describe('filtroPorTipo', () => {
  it('Nos da la cantidad específica de Pokémon por tipo', () => {
    expect(filtroPorTipo(data.pokemon, 'water')).toHaveLength(50);
  }); 
});



describe("ordenarPokemon", () => {
  const data = [
    { name: "charizard" },
    { name: "bulbasaur" },
    { name: "squirtle" }
  ];

  it("debe ordenar por nombre de A-Z", () => {
    ordenarPokemon(data, "A-Z");
    expect(data).toEqual([
      { name: "bulbasaur" },
      { name: "charizard" },
      { name: "squirtle" }
    ]);
  });

  it("debe ordenar por nombre de Z-A", () => {
    ordenarPokemon(data, "Z-A");
    expect(data).toEqual([
      { name: "squirtle" },
      { name: "charizard" },
      { name: "bulbasaur" }
    ]);
  });
});




describe('orderByNum', () => {

  it('debería ordenar en orden ascendente 0-9 con 251 registros', () => {
    const valorOrdenAscendente = '0-9';
    const resultadoOrdenAscendente = orderByNum(data, valorOrdenAscendente);
    expect(resultadoOrdenAscendente[0].num).toBe('001');
    expect(resultadoOrdenAscendente[250].num).toBe('251');
  });

  it('debería ordenar en orden descendente 9-0 con 251 registros', () => {
    const valorOrdenDescendente = '9-0';
    const resultadoOrdenDescendente = orderByNum(data, valorOrdenDescendente);
    expect(resultadoOrdenDescendente[0].num).toBe('251');
    expect(resultadoOrdenDescendente[250].num).toBe('001');
  });
});



describe('filtroPorHuevos', () => {
  it('debería filtrar y mostrar correctamente el porcentaje de pokemones con Huevos en Suerte', () => {
    const valorFiltro = "2 km";
    const resultadoFiltro = filtroPorHuevos(data, valorFiltro);
    expect(resultadoFiltro.length).toBe(69);
    expect(document.getElementById("rdoporcentaje").innerHTML).toContain("27.49%");
  });

  it('debería filtrar y mostrar correctamente el porcentaje de pokemones con Huevos de 5 km', () => {
    const valorFiltro = "5 km";
    const resultadoFiltro = filtroPorHuevos(data, valorFiltro);
    expect(resultadoFiltro.length).toBe(107);
    expect(document.getElementById("rdoporcentaje").innerHTML).toContain("42.63%");
  });

  it('debería filtrar y mostrar correctamente el porcentaje de pokemones con Huevos de 10 km', () => {
    const valorFiltro = "10 km";
    const resultadoFiltro = filtroPorHuevos(data, valorFiltro);
    expect(resultadoFiltro.length).toBe(27);
    expect(document.getElementById("rdoporcentaje").innerHTML).toContain("10.76%");
  });

 

});





// describe('orderByNum', () => {
//   it('debería ordenar por número en orden ascendente 0-9 con 251 registros', () => {
//     const valorOrdenAscendente = '0-9';
//     const resultadoOrdenAscendente = orderByNum(data, valorOrdenAscendente);
//     expect(resultadoOrdenAscendente[0].name).toEqual('bulbasaur');
//     expect(resultadoOrdenAscendente[250].name).toEqual('celebi');
//   });

//   it('debería ordenar por número en orden descendente 9-0 con 251 registros', () => {
//     const valorOrdenDescendente = '9-0';
//     const resultadoOrdenDescendente = orderByNum(data, valorOrdenDescendente);
//     expect(resultadoOrdenDescendente[0].name).toEqual('Magearna');
//     expect(resultadoOrdenDescendente[250].name).toEqual('Bulbasaur');
//   });
// });




// describe('orderByNum', () => {
//   it('debería ordenar en orden ascendente ', () => {
//     const valorOrdenAscendente = "0-9";
//     const resultadoOrdenAscendente = orderByNum(data, valorOrdenAscendente);
//     expect(resultadoOrdenAscendente[0].name).toBe("bulbasaur");
//     expect(resultadoOrdenAscendente[250].name).toBe("celebi");

//   });

//   it('debería ordenar en orden descendente ', () => {
//     const valorOrdenDescendente = "9-0";
//     const resultadoOrdenDescendente = orderByNum(data, valorOrdenDescendente);
//     expect(resultadoOrdenDescendente[0].name).toBe("celebi");
//     expect(resultadoOrdenDescendente[250].name).toBe("bulbasaur");

//   });
// });








// describe('orderByNum', () => {
//   it('Debería ordenar de forma ascendente', () => {
//     const valor = "0-9";
//     const result = orderByNum(data, valor);
//     expect(result[0].num).toEqual('001');
//   });

//   it('Debería ordenar de forma descendente', () => {
//     const valor = "9-0";
//     const result = orderByNum(data, valor);
//     expect(result[0].num).toEqual('251');
//   });
// });







//filtroPorHuevos








// import { filtroPorTipo} from '../src/data.js';

// describe('filtroPorTipo', () => {
//   it('is a function', () => {
//     expect(typeof filtroPorTipo).toBe('function');

//   });
// });



// const pokemonData = require('./pokemon'); // importamos el archivo de datos
// const filtroPorTipo = require('./data');

// describe('filtroPorTipo', () => {
//   it('debe retornar los pokémons del tipo Electric', () => {
//     const result = filtroPorTipo(pokemonData, 'Electric');
//     expect(result).toEqual([
//       {
//         "id": 25,
//         "name": "Pikachu",
//         "type": [
//           "Electric"
//         ]
//       },
//       {
//         "id": 26,
//         "name": "Raichu",
//         "type": [
//           "Electric"
//         ]
//       }
//     ]);
//   });

//   it('debe retornar un array vacío si no hay pokémons del tipo Agua', () => {
//     const result = filtroPorTipo(pokemonData, 'Agua');
//     expect(result).toEqual([]);
//   });
// });















// import { filtroPorTipo, ordenarPokemon, filtroPorHuevos, orderByNum} from '../src/data.js';


// describe('filtroPorTipo', () => {
//   // const data = [
//   //   { name: 'Pikachu', type: ['Electric'] },
//   //   { name: 'Squirtle', type: ['Water'] },
//   //   { name: 'Charmander', type: ['Fire'] },
//   //   { name: 'Bulbasaur', type: ['Grass', 'Poison'] }
//   // ];

//   it('debería devolver un array de objetos con solo Pokemon del tipo "Electric"', () => {
//     const pokemonElectricos = filtroPorTipo(data, 'electric');
//     expect(pokemonElectricos).toEqual([ { name: 'Pikachu', type: [ 'Electric' ] } ]);
//   });
  
//   it('debería devolver un array vacío si no hay Pokemon del tipo buscado', () => {
//     const pokemonVeneno = filtroPorTipo(data, 'Veneno');
//     expect(pokemonVeneno).toEqual([]);
//   });

//   it('debería devolver un array de objetos con solo Pokemon del tipo "Grass"', () => {
//     const pokemonDeHierba = filtroPorTipo(data, 'Grass');
//     expect(pokemonDeHierba).toEqual([ { name: 'Bulbasaur', type: ['Grass', 'Poison'] }]);
//   });
// });


// describe('ordenarPokemon', () => {
//   const pokemonData = [
//     { name: 'Charmander' },
//     { name: 'Squirtle' },
//     { name: 'Bulbasaur' }
//   ];
  
//   it('debería ordenar los Pokémon en orden alfabético ascendente si se pasa "A-Z" como segundo parámetro', () => {
//     const resultado = ordenarPokemon(pokemonData, 'A-Z');
//     expect(resultado[0].name).toBe('Bulbasaur');
//     expect(resultado[1].name).toBe('Charmander');
//     expect(resultado[2].name).toBe('Squirtle');
//   });
  
//   it('debería ordenar los Pokémon en orden alfabético descendente si se pasa cualquier otro valor como segundo parámetro', () => {
//     const resultado = ordenarPokemon(pokemonData, 'Z-A');
//     expect(resultado[0].name).toBe('Squirtle');
//     expect(resultado[1].name).toBe('Charmander');
//     expect(resultado[2].name).toBe('Bulbasaur');
//   });
// });


// describe("filtroPorHuevos", () => {
//   const data = [
//     { id: 1, name: "Bulbasaur", egg: "2 km" },
//     { id: 2, name: "Charmander", egg: "5 km" },
//     { id: 3, name: "Squirtle", egg: "5 km" },
//     { id: 4, name: "Pikachu", egg: "Not in Eggs" }
//   ];

//   it("debería filtrar correctamente los Pokemones que eclosionan en huevos de 2 km", () => {
//     const filteredData = filtroPorHuevos(data, "2 km");

//     expect(filteredData).toHaveLength(1);
//     expect(filteredData[0].name).toBe("Bulbasaur");
//   });

//   it("debería filtrar correctamente los Pokemones que NO eclosionan en huevos", () => {
//     const filteredData = filtroPorHuevos(data, "Not in Eggs");

//     expect(filteredData).toHaveLength(1);
//     expect(filteredData[0].name).toBe("Pikachu");
//   });
// });



// describe("orderByNum", () => {
//   const pokemonData = [
//     { id: 1, num: "001", name: "Bulbasaur" },
//     { id: 2, num: "002", name: "Ivysaur" },
//     { id: 3, num: "003", name: "Venusaur" },
//     { id: 4, num: "004", name: "Charmander" },
//     { id: 5, num: "005", name: "Charmeleon" },
//     { id: 6, num: "006", name: "Charizard" },
//   ];

//   it("Debe ordenar los pokemones por número de menos a mayor (0-9)", () => {
//     const ordenadoMenorMayor = orderByNum(pokemonData, "0-9");
//     expect(ordenadoMenorMayor[0].name).toBe("Bulbasaur");
//     expect(ordenadoMenorMayor[1].name).toBe("Ivysaur");
//     expect(ordenadoMenorMayor[2].name).toBe("Venusaur");
//     expect(ordenadoMenorMayor[3].name).toBe("Charmander");
//     expect(ordenadoMenorMayor[4].name).toBe("Charmeleon");
//     expect(ordenadoMenorMayor[5].name).toBe("Charizard");
//   });

//   it("Debe ordenar los pokemones por número de mayor a menos (Z-A)", () => {
//     const ordenadoMayorMenor = orderByNum(pokemonData, "Z-A");
//     expect(ordenadoMayorMenor[0].name).toBe("Charizard");
//     expect(ordenadoMayorMenor[1].name).toBe("Charmeleon");
//     expect(ordenadoMayorMenor[2].name).toBe("Charmander");
//     expect(ordenadoMayorMenor[3].name).toBe("Venusaur");
//     expect(ordenadoMayorMenor[4].name).toBe("Ivysaur");
//     expect(ordenadoMayorMenor[5].name).toBe("Bulbasaur");
//   });
// });




// describe('', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
