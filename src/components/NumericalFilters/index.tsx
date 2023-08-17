import { useContext, useEffect, useState } from 'react';
import ContextStarWars from '../../context/user-context';
import useFetch from '../../hooks/useFetch';
import useFilter from '../../hooks/useFilter';
import './numericalFilters.css';
import { INICIAL_NUMERICAL_VALUES_FILTER } from '../../types/types';

function NumericalFilters() {
  const optionsCollumn = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const [optionsCollumnState, setOptionsCollumnState] = useState(optionsCollumn);
  const {
    handleInputChange,
    numericalValuesFilter,
    multiplesFiltersState,
    setNumericalValuesFilter,
    setMultiplesFiltersState,
    setDataFilter,
  } = useContext(ContextStarWars);
  const { data } = useFetch();
  const { dataFilter, multiplesFilters } = useFilter();
  console.log(data);

  const handleSubmitButtonFilter = (event: React.
    FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMultiplesFiltersState([
      ...multiplesFiltersState,
      numericalValuesFilter,
    ]);

    if (dataFilter.length === 0) {
      multiplesFilters(data, numericalValuesFilter);
    } else {
      multiplesFilters(dataFilter, numericalValuesFilter);
    }

    setNumericalValuesFilter(INICIAL_NUMERICAL_VALUES_FILTER);
  };

  useEffect(() => {
    if (multiplesFiltersState.length > 0) {
      const collumn = multiplesFiltersState.map((filters) => filters.columnFilter);
      const newOptionsCollumn = optionsCollumn
        .filter((option) => !collumn.includes(option));
      setOptionsCollumnState(newOptionsCollumn);
    }
  }, [multiplesFiltersState]);

  const handleDeleteFilter = (columnFilter: string) => {
    const updatedFilters = multiplesFiltersState
      .filter((obj) => obj.columnFilter !== columnFilter);
    setMultiplesFiltersState(updatedFilters);
    setOptionsCollumnState([
      ...optionsCollumnState,
      columnFilter,
    ]);
    setDataFilter([]);
    if (multiplesFiltersState.length !== 0) {
      multiplesFiltersState.forEach((objFilter) => multiplesFilters(data, objFilter));
    }
  };
  console.log(multiplesFiltersState);
  return (
    <>
      <form onSubmit={ handleSubmitButtonFilter }>
        <label>
          Coluna
          <select
            id="column-filter"
            name="columnFilter"
            data-testid="column-filter"
            onChange={ handleInputChange }
            value={ numericalValuesFilter.columnFilter }
          >
            {
              optionsCollumnState.map((option) => (
                <option value={ option } key={ option }>{ option }</option>
              ))
           }
          </select>
        </label>
        <label>
          Operador
          <select
            id="comparison-filter"
            name="comparisonFilter"
            data-testid="comparison-filter"
            onChange={ handleInputChange }
            value={ numericalValuesFilter.comparisonFilter }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label>
          <input
            type="number"
            name="valueFilter"
            data-testid="value-filter"
            onChange={ handleInputChange }
            value={ numericalValuesFilter.valueFilter }
          />
        </label>
        <button
          type="submit"
          id="button-filter"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </form>
      <form action="submit">
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
      </form>
      {
        multiplesFiltersState.map((filtered) => (
          <div
            key={ `${Math.random()}` }
            data-testid="filter"
          >
            <p>
              {filtered.columnFilter}
              {' '}
              {filtered.comparisonFilter}
              {' '}
              {filtered.valueFilter}
            </p>
            <button
              className="button-delete"
              onClick={ () => handleDeleteFilter(filtered.columnFilter) }
            >
              X
            </button>

          </div>))
      }

    </>
  );
}
export default NumericalFilters;
