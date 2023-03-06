import { example, anotherExample, filtroPorTipo } from '../src/data.js';

/*it, qué hace el test. example,pej qué hacen 2 filtros, example (filtrar por tipo (dato,))*/
/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/
describe('filtroPorTipo', () => {
  it('dragon', () => {
    expect(typeof filtroPorTipo).toBe('Dragon');
  });

  it('returns `filtroPorTipo`', ("dragon") => {
    expect(filtroPorTipo("dragon")).toBe('Dragon');
  });
});

describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
