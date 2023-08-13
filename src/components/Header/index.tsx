import { useContext, useState } from 'react';
import './header.css';
import ContextStarWars from '../../context/user-context';
import { StarWarsData } from '../../types/types';

function Header() {
  const {
    data,
    inputFilter,
    handleInputFilter,
    numericalValuesFilter,
    handleInputChange,
  } = useContext(ContextStarWars);

  const [filtered, setFiltered] = useState<StarWarsData[]>();

  const { columnFilter, comparisonFilter, valueFilter } = numericalValuesFilter;

  const handleClickFilter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (comparisonFilter === 'maior que') {
      const filterdata = data
        .filter((obj) => Number(obj[
          columnFilter as keyof StarWarsData]) > Number(valueFilter));
      setFiltered(filterdata);
    } if (comparisonFilter === 'menor que') {
      const filter = data.filter((obj) => Number(obj[
        columnFilter as keyof StarWarsData]) < Number(valueFilter));
      setFiltered(filter);
    } if (comparisonFilter === 'igual a') {
      const filter = data
        .filter((obj) => Number(obj[
          columnFilter as keyof StarWarsData]) === Number(valueFilter));
      setFiltered(filter);
    }
  };
  console.log(filtered);

  return (
    <form action="">
      <section id="title-input">
        <h3>  Projeto Star Wars - Trybe</h3>
        <label>
          <input
            type="text"
            id="input-filter"
            value={ inputFilter }
            onChange={ handleInputFilter }
            data-testid="name-filter"
          />
        </label>
      </section>
      <section id="table-filter">
        <label htmlFor="">
          Coluna
          <select
            id="column-filter"
            name="columnFilter"
            data-testid="column-filter"
            onChange={ handleInputChange }
            value={ columnFilter }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="">
          Operador
          <select
            id="comparison-filter"
            name="comparisonFilter"
            data-testid="comparison-filter"
            onChange={ handleInputChange }
            value={ comparisonFilter }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="">
          <input
            type="number"
            name="valueFilter"
            data-testid="value-filter"
            onChange={ handleInputChange }
            value={ valueFilter }
          />
        </label>
        <button
          id="button-filter"
          data-testid="button-filter"
          onClick={ () => handleClickFilter }
        >
          Filtrar
        </button>
        <label htmlFor="">
          Ordenar
          <select name="" id="">
            <option value="">uma opçao aqui</option>
          </select>
        </label>
        <label>
          <input
            type="checkbox"
          />
          Ascendente
        </label>
        <label>
          <input
            type="checkbox"
          />
          Descendente
        </label>
        <button>Ordenar</button>
        <button>Remover Filtros</button>
      </section>
    </form>
  );
}
export default Header;
