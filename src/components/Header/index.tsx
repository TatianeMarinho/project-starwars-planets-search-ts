import { useContext } from 'react';
import './header.css';
import ContextStarWars from '../../context/user-context';

function Header() {
  const { inputFilter, handleInputFilter } = useContext(ContextStarWars);

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
            name="column-filter"
            data-testid="column-filter"
          >
            <option value="">population</option>
            <option value="">orbital_period</option>
            <option value="">diameter</option>
            <option value="">rotation_period</option>
            <option value="">surface_water</option>
          </select>
        </label>
        <label htmlFor="">
          Operador
          <select
            id="comparison-filter"
            name="comparison-filter"
            data-testid="comparison-filter"
          >
            <option value="">maior que</option>
            <option value="">menor que</option>
            <option value="">igual a</option>
          </select>
        </label>
        <label htmlFor="">
          <input
            type="number"
            data-testid="value-filter"
          />
        </label>
        <button
          id="button-filter"
          data-testid="button-filter"
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
