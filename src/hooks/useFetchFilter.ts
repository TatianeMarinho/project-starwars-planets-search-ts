import { useContext, useEffect, useState } from 'react';
import { ReturnApiType } from '../types';
import ContextStarWars from '../context/user-context';

function useFetchFilter() {
  const { data, setData } = useContext(ContextStarWars);
  const [error, setError] = useState<string | null>(null);
  const URL_API = 'https://swapi.dev/api/planets';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(URL_API);
        const jsonData = await response.json();
        const dataFilter = jsonData.results.map((obj: ReturnApiType) => {
          const { residents, ...restObj } = obj;
          return restObj;
        });
        setData(dataFilter);
      } catch (err) {
        setError('erro no retorno da api');
      }
    }
    fetchData();
  }, []);

  return {
    data,
    setData,
    error,
  };
}

export default useFetchFilter;
