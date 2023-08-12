import { useState } from 'react';
import ContextStarWars from './user-context';
import { INICIAL_NUMERICAL_VALUES_FILTER,
  NumericalValuesFilter,
  StarWarsData, UserProviderType } from '../types/types';
import useFilter from '../hooks/useFilter';

function StarWarsProvider({ children }: UserProviderType) {
  const [data, setData] = useState<StarWarsData[]>([]);
  const [inputFilter, setInputFilter] = useState<string>('');
  const [dataFilter, setDataFilter] = useState<StarWarsData[]>([]);
  const [
    numericalValuesFilter,
    setNumericalValuesFilter,
  ] = useState(INICIAL_NUMERICAL_VALUES_FILTER);
  const [dataFilterClick, setDataFilterClick] = useState<StarWarsData[]>([]);
  const { handleFilter } = useFilter();

  const handleInputFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueInput = event.target.value;
    setInputFilter(valueInput);

    const filtered = data.filter((obj) => obj.name.toLowerCase()
      .includes(valueInput.toLowerCase()));

    return setDataFilter(filtered);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setNumericalValuesFilter({
      ...numericalValuesFilter,
      [name]: value });
      console.log(numericalValuesFilter);
  };

  const handleClickFilter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { columnFilter, comparisonFilter, valueFilter } = numericalValuesFilter;
    handleFilter(columnFilter, comparisonFilter, valueFilter);
    setDataFilter(dataFilterClick);
  };
  console.log(dataFilterClick);
  console.log(dataFilter);
  const stateglobal = {
    data,
    setData,
    inputFilter,
    setInputFilter,
    handleInputFilter,
    dataFilter,
    setDataFilter,
    numericalValuesFilter,
    setNumericalValuesFilter,
    handleInputChange,
    handleClickFilter,
    dataFilterClick,
    setDataFilterClick,
  };

  return (
    <ContextStarWars.Provider value={ stateglobal }>
      {children}
    </ContextStarWars.Provider>
  );
}
export default StarWarsProvider;
