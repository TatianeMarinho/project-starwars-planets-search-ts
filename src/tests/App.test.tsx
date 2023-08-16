import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renderiza um titulo', () => {
  render(<App />);
  const title = screen.getByText(/^Projeto Star Wars - Trybe$/);
  expect(title).toBeInTheDocument();
});

test('renderiza um butão com o texto Filtrar', () => {
  render(<App />);
  const filtrarButton = screen.getByRole('button', { name: /Filtrar/i });
  expect(filtrarButton).toBeInTheDocument();
});

test('renderiza um butão com o texto Ordenar', () => {
  render(<App />);
  const ordenarButton = screen.getByRole('button', { name: /Ordenar/i });
  expect(ordenarButton).toBeInTheDocument();
});

test('renderiza um butão como o texto Remover Filtros', () => {
  render(<App />);
  const removeFiltrosButton = screen.getByRole('button', { name: /Remover Filtros/i });
  expect(removeFiltrosButton).toBeInTheDocument();
});

test('renderiza uma tabela', () => {
  render(<App />);
  const tabelaElement = screen.getByRole('table');
  expect(tabelaElement).toBeInTheDocument();
});

test('Verifica se a tabela tem 13 colunas', () => {
  render(<App />);
  const tabelaElement = screen.getByRole('table');
  const colunas = tabelaElement.querySelectorAll('th');
  expect(colunas.length).toBe(13);
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
});
test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, App!/i);
  expect(linkElement).toBeInTheDocument();
});
test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, App!/i);
  expect(linkElement).toBeInTheDocument();
}); */
