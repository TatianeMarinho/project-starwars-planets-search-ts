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
    valuesFilter: NumericalValuesFilter[],
  ) => {
    valuesFilter.forEach((value) => {
      if (value.comparisonFilter === 'maior que') {
        const dataFilterNumerical = dataApi
          .filter((obj) => Number(obj[value
            .columnFilter as keyof StarWarsData])
               > Number(value.valueFilter));
        dataApi = dataFilterNumerical;
      } else if (value.comparisonFilter === 'menor que') {
        const filterNumerical = dataApi
          .filter((obj) => Number(obj[value
            .columnFilter as keyof StarWarsData])
               < Number(value.valueFilter));
        dataApi = filterNumerical;
      } else if (value.comparisonFilter === 'igual a') {
        const filterNumerical = dataApi
          .filter((obj) => Number(obj[value
            .columnFilter as keyof StarWarsData])
               === Number(value.valueFilter));
        dataApi = filterNumerical;
      }
    });
    setDataFilter(dataApi);
  };

  return {
    dataFilter,
    setDataFilter,
    multiplesFilters,
  };
}

export default useFilter;
