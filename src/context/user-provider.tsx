import { useState } from 'react';
import ContextStarWars from './user-context';
import { StarWarsData, UserProviderType } from '../types/types';

function StarWarsProvider({ children }: UserProviderType) {
  const [data, setData] = useState<StarWarsData[]>([]);
  const [inputFilter, setInputFilter] = useState<string>('');
  const [dataFilter, setDataFilter] = useState<StarWarsData[]>([]);

  const handleInputFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueInput = event.target.value;
    setInputFilter(valueInput);

    const filtered = data.filter((obj) => obj.name.toLowerCase()
      .includes(valueInput.toLowerCase()));

    return setDataFilter(filtered);
  };

  const stateglobal = {
    data,
    setData,
    inputFilter,
    setInputFilter,
    handleInputFilter,
    dataFilter,
    setDataFilter,
  };

  return (
    <ContextStarWars.Provider value={ stateglobal }>
      {children}
    </ContextStarWars.Provider>
  );
}
export default StarWarsProvider;
