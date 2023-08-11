function Header() {
  return (
    <form action="">
      <section>
        <label htmlFor="">
          Projeto Star Wars - Trybe
          <input type="text" data-testid="name-filter" />
        </label>
      </section>
      <section>
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
