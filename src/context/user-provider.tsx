import { useState } from 'react';
import ContextStarWars from './user-context';
import { INICIAL_NUMERICAL_VALUES_FILTER,
  StarWarsData, UserProviderType } from '../types/types';

function StarWarsProvider({ children }: UserProviderType) {
  const [data, setData] = useState<StarWarsData[]>([]);
  const [inputFilter, setInputFilter] = useState<string>('');
  const [dataFilter, setDataFilter] = useState<StarWarsData[]>([]);
  const [
    numericalValuesFilter,
    setNumericalValuesFilter,
  ] = useState(INICIAL_NUMERICAL_VALUES_FILTER);

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
  };
  console.log(numericalValuesFilter);

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
  };

  return (
    <ContextStarWars.Provider value={ stateglobal }>
      {children}
    </ContextStarWars.Provider>
  );
}
export default StarWarsProvider;
