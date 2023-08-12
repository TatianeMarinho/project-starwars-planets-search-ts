import { useContext } from 'react';
import ContextStarWars from '../context/user-context';
import { StarWarsData } from '../types/types';

const useFilter = () => {
  const {
    data,
    setDataFilterClick,
  } = useContext(ContextStarWars);

  const handleFilter = (
    columnFilter: keyof StarWarsData,
    comparisonFilter: string,
    valueFilter: string,
  ) => {
    const filteredData = data.filter((obj) => {
      const valueToCompare = parseFloat(valueFilter);
      const objValue = parseFloat(obj[columnFilter]);

      if (comparisonFilter === 'maior que') {
        return objValue > valueToCompare;
      } if (comparisonFilter === 'menor que') {
        return objValue < valueToCompare;
      } if (comparisonFilter === 'igual a') {
        return objValue === valueToCompare;
      } return true;
    });

    setDataFilterClick(filteredData);
  };
  return { handleFilter };
};
export default useFilter;
