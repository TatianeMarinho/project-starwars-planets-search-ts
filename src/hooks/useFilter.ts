import { useContext } from 'react';
import ContextStarWars from '../context/user-context';
import { NumericalValuesFilter, StarWarsData } from '../types/types';

function useFilter() {
  const {
    dataFilter,
    setDataFilter,
  } = useContext(ContextStarWars);

  const multiplesFilters = (
    dataApi: StarWarsData[],
    valuesFilter: NumericalValuesFilter,
  ) => {
    if (valuesFilter.comparisonFilter === 'maior que') {
      const dataFilterNumerical = dataApi
        .filter((obj) => Number(obj[valuesFilter
          .columnFilter as keyof StarWarsData])
             > Number(valuesFilter.valueFilter));
      setDataFilter(dataFilterNumerical);
    } else if (valuesFilter.comparisonFilter === 'menor que') {
      const filterNumerical = dataApi
        .filter((obj) => Number(obj[valuesFilter
          .columnFilter as keyof StarWarsData])
             < Number(valuesFilter.valueFilter));
      setDataFilter(filterNumerical);
    } else if (valuesFilter.comparisonFilter === 'igual a') {
      const filterNumerical = dataApi
        .filter((obj) => Number(obj[valuesFilter
          .columnFilter as keyof StarWarsData])
             === Number(valuesFilter.valueFilter));
      setDataFilter(filterNumerical);
    } return false;
  };

  return {
    dataFilter,
    setDataFilter,
    multiplesFilters,
  };
}

export default useFilter;
