import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from "vitest";
import App from '../App';
import MockData from '../mocks/mockData';
import StarWarsProvider from '../context/user-provider';
import userEvent from '@testing-library/user-event';

describe('testando a aplicação', () => {
  test('renderiza um titulo', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => MockData,
    });
  render(
    <StarWarsProvider>
    <App />
    </StarWarsProvider>
  );
  const title = screen.getByText(/^Projeto Star Wars - Trybe$/);
  expect(title).toBeInTheDocument();
});

test('renderiza um butão com o texto Filtrar', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => MockData,
  });
render(
  <StarWarsProvider>
  <App />
  </StarWarsProvider>
);
  const filtrarButton = screen.getByRole('button', { name: /Filtrar/i });
  expect(filtrarButton).toBeInTheDocument();
});

test('renderiza um butão com o texto Ordenar', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => MockData,
  });
render(
  <StarWarsProvider>
  <App />
  </StarWarsProvider>
);
  const ordenarButton = screen.getByRole('button', { name: /Ordenar/i });
  expect(ordenarButton).toBeInTheDocument();
});

test('renderiza um butão como o texto Remover Filtros', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => MockData,
  });
render(
  <StarWarsProvider>
  <App />
  </StarWarsProvider>
);
  const removeFiltrosButton = screen.getByRole('button', { name: /Remover Filtros/i });
  expect(removeFiltrosButton).toBeInTheDocument();
});

test('renderiza uma tabela', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => MockData,
  });
render(
  <StarWarsProvider>
  <App />
  </StarWarsProvider>
);
  const tabelaElement = screen.getByRole('table');
  expect(tabelaElement).toBeInTheDocument();
});

test('Verifica se a tabela tem 13 colunas', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => MockData,
  });
render(
  <StarWarsProvider>
  <App />
  </StarWarsProvider>
);
  const tabelaElement = screen.getByRole('table');
  const colunas = tabelaElement.querySelectorAll('th');
  expect(colunas.length).toBe(13);
});

test('confere os valores iniciais dos inputs e sua funcionalidade', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => MockData,
  });
render(
  <StarWarsProvider>
  <App />
  </StarWarsProvider>
);
  const inputColumn = screen.getByTestId("column-filter");
  const inputComparison = screen.getByTestId("comparison-filter");
  const inputValue = screen.getByTestId("value-filter");
  const buttonFilter = screen.getByTestId("button-filter");
  expect(inputColumn).toBeInTheDocument();
  expect(inputComparison).toBeInTheDocument();
  expect(inputValue).toBeInTheDocument();
  expect(buttonFilter).toBeInTheDocument();
  expect(inputColumn).toHaveDisplayValue("population");
  expect(inputComparison).toHaveDisplayValue("maior que");
  expect(inputValue).toHaveValue(0);

  await userEvent.selectOptions(inputColumn, "diameter");
  await userEvent.selectOptions(inputComparison, "menor que");
  await userEvent.type(inputValue, "12500");
  expect(inputColumn).toHaveDisplayValue("diameter");
  expect(inputComparison).toHaveDisplayValue("menor que");
  expect(inputValue).toHaveValue(12500);

  userEvent.click(buttonFilter);

  const filtered = screen.queryByTestId("filter");
  expect(filtered).toBeInTheDocument();

});

test('a tabela tem os componentes certos', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => MockData,
  });
render(
  <StarWarsProvider>
  <App />
  </StarWarsProvider>
);
  const totalTh = screen.getAllByRole("columnheader");
  expect(totalTh).toHaveLength(13);

  const planetHoth = await screen.findByRole("cell", { name: /Hoth/i });
  expect(planetHoth).toBeInTheDocument();

  const totalTr = await screen.findAllByRole("row");
  expect(totalTr).toHaveLength(11);

});

test('o botao filtrar funciona', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => MockData,
  });
render(
  <StarWarsProvider>
  <App />
  </StarWarsProvider>
);
  const totalTh = screen.getAllByRole("columnheader");
  const planetHoth = await screen.findByRole("cell", { name: /Hoth/i });
  
  const inputColumn = screen.getByTestId("column-filter");
  const inputComparison = screen.getByTestId("comparison-filter");
  const inputValue = screen.getByTestId("value-filter");
  const buttonFilter = screen.getByTestId("button-filter");
  
  await userEvent.selectOptions(inputColumn, "surface_water");
  await userEvent.selectOptions(inputComparison, "maior que");
  await userEvent.type(inputValue, "08");
  await userEvent.click(buttonFilter);
  const totalTr = await screen.findAllByRole("row");
  expect(totalTr).toHaveLength(5);

  const planetAlderaan = await screen.getAllByTestId("planet-name");
  expect(planetAlderaan.length).toBeGreaterThan(1);
  
  const secondTr = await screen.getAllByRole("row")[1];
  expect(secondTr).toContainElement(planetAlderaan[0])
});

/* test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, App!/i);
  expect(linkElement).toBeInTheDocument();
});
test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, App!/i);
  expect(linkElement).toBeInTheDocument();
}); */
});
