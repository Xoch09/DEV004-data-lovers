import {filtroPorTipo} from '../src/data.js';


  
/*it, qué hace el test. example,pej qué hacen 2 filtros, example (filtrar por tipo (dato,))*/

const data = {"name": "pikachu", "type":"electric"}

describe("filtroPorTipo", () => {
  it('muestra si filtra electrico', () => { //elmensaje
    expect(typeof filtroPorTipo).toBe('function');
  });

  it('returns "Electric"', () => {
    expect(filtroPorTipo(data, "Electric")).toBe('electric');
  });
});

