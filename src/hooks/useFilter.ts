import { useContext } from 'react';
import ContextStarWars from '../context/user-context';
import { NumericalValuesFilter, StarWarsData } from '../types/types';

function useFilter() {
  const {
    data,
    dataFilter,
    setDataFilter,
    orderState,
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

  const handleSortOrder = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const filterOrder = orderState;
    const { column, sort } = filterOrder;
    console.log(filterOrder);
    let planetData = dataFilter;

    if (dataFilter.length === 0) {
      planetData = data;
    }

    const newDataFilter = planetData.filter((obj) => (
      obj[column as keyof StarWarsData] !== 'unknown'));

    const newDataUnknown = planetData.filter((obj) => (
      obj[column as keyof StarWarsData] === 'unknown'));

    const sortData = newDataFilter.sort((a, b) => {
      if (sort === 'ASC') {
        return Number(a[column as keyof StarWarsData])
         - Number(b[column as keyof StarWarsData]);
      } if (sort === 'DESC') {
        return Number(b[column as keyof StarWarsData])
        - Number(a[column as keyof StarWarsData]);
      }
      return 0;
    });
    sortData.push(...newDataUnknown);
    return setDataFilter(sortData);
  };

  return {
    dataFilter,
    setDataFilter,
    multiplesFilters,
    handleSortOrder,
  };
}

export default useFilter;
