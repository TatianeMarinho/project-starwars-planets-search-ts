import { useContext } from 'react';
import './header.css';
import ContextStarWars from '../../context/user-context';

function Header() {
  const {
    inputFilter,
    handleInputFilter,
  } = useContext(ContextStarWars);

  return (
    <header>
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
    </header>
  );
}
export default Header;
