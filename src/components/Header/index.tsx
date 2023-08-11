import { useContext } from 'react';
import './header.css';
import ContextStarWars from '../../context/user-context';

function Header() {
  const { inputFilter, handleInputFilter } = useContext(ContextStarWars);
  console.log(inputFilter);

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
          <select name="" id="">
            <option value="">uma opçao aqui</option>
          </select>
        </label>
        <label htmlFor="">
          Operador
          <select name="" id="">
            <option value="">uma opçao aqui</option>
          </select>
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <button>Filtrar</button>
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
