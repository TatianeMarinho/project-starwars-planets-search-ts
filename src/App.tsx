import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import NumericalFilters from './components/NumericalFilters';

function App() {
  return (
    <main>
      <Header />
      <NumericalFilters />
      <Table />
    </main>
  );
}

export default App;
