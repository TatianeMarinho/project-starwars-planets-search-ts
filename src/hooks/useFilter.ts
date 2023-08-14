import { useContext } from 'react';
import ContextStarWars from '../context/user-context';
import { StarWarsData } from '../types/types';

function useFilter() {
  const {
    dataFilter,
    setDataFilter,
    numericalValuesFilter } = useContext(ContextStarWars);
  const { comparisonFilter, columnFilter, valueFilter } = numericalValuesFilter;

  const multiplesFilters = (dataApi: StarWarsData[]) => {
    if (comparisonFilter === 'maior que') {
      const filterNumerical = dataApi
        .filter((obj) => Number(obj[columnFilter as keyof StarWarsData])
             > Number(valueFilter));
      setDataFilter(filterNumerical);
    } else if (comparisonFilter === 'menor que') {
      const filterNumerical = dataApi
        .filter((obj) => Number(obj[columnFilter as keyof StarWarsData])
             < Number(valueFilter));
      setDataFilter(filterNumerical);
    } else if (comparisonFilter === 'igual a') {
      const filterNumerical = dataApi
        .filter((obj) => Number(obj[columnFilter as keyof StarWarsData])
             === Number(valueFilter));
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
