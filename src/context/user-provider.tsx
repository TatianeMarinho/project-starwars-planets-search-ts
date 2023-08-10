import { useState } from 'react';
import ContextStarWars from './user-context';
import { StarWarsData, UserProviderType } from '../types';

function StarWarsProvider({ children }: UserProviderType) {
  const [data, setData] = useState<StarWarsData[]>([]);

  const stateglobal = {
    data,
    setData,
  };

  return (
    <ContextStarWars.Provider value={ stateglobal }>
      {children}
    </ContextStarWars.Provider>
  );
}
export default StarWarsProvider;
