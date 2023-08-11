import { useContext, useEffect } from 'react';
import { StarWarsData } from '../types/types';
import ContextStarWars from '../context/user-context';

function useInputFilter(data: StarWarsData[], filterKey: any) {
  const {
    inputFilter,
    setInputFilter,
    dataFilter,
    setDataFilter,
  } = useContext(ContextStarWars);

  const handleInputChange = (value:any) => {
    setInputFilter(value);
  };

  useEffect(() => {
    const filtered = data.filter((obj: StarWarsData) => obj[filterKey]
      .toLowerCase().includes(inputFilter.toLowerCase()));
    setDataFilter(filtered);
  }, [inputFilter, data, filterKey]);

  return { inputFilter, handleInputChange, dataFilter };
}
export default useInputFilter;
