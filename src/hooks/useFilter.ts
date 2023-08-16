import { useContext } from 'react';
import ContextStarWars from '../context/user-context';
import { StarWarsData } from '../types/types';

function useFilter() {
  const {
    dataFilter,
    setDataFilter,
    numericalValuesFilter } = useContext(ContextStarWars);

  const multiplesFilters = (dataApi: StarWarsData[]) => {
    if (numericalValuesFilter.comparisonFilter === 'maior que') {
      const filterNumerical = dataApi
        .filter((obj) => Number(obj[numericalValuesFilter
          .columnFilter as keyof StarWarsData])
             > Number(numericalValuesFilter.valueFilter));
      setDataFilter(filterNumerical);
    } else if (numericalValuesFilter.comparisonFilter === 'menor que') {
      const filterNumerical = dataApi
        .filter((obj) => Number(obj[numericalValuesFilter
          .columnFilter as keyof StarWarsData])
             < Number(numericalValuesFilter.valueFilter));
      setDataFilter(filterNumerical);
    } else if (numericalValuesFilter.comparisonFilter === 'igual a') {
      const filterNumerical = dataApi
        .filter((obj) => Number(obj[numericalValuesFilter
          .columnFilter as keyof StarWarsData])
             === Number(numericalValuesFilter.valueFilter));
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
