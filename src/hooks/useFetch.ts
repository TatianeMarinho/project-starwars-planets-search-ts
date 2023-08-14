import { useContext, useEffect, useState } from 'react';
import { ReturnApiType } from '../types/types';
import ContextStarWars from '../context/user-context';

function useFetch() {
  const { data, setData } = useContext(ContextStarWars);
  const [error, setError] = useState<string | null>(null);
  const URL_API = 'https://swapi.dev/api/planets';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL_API);
        const jsonData = await response.json();
        const dataFiltered = jsonData.results.map((obj: ReturnApiType) => {
          const { residents, ...restObj } = obj;
          return restObj;
        });
        setData(dataFiltered);
      } catch (err) {
        setError('erro no retorno da api');
      }
    };
    fetchData();
  }, [setData]);

  return {
    data,
    setData,
    error,
  };
}

export default useFetch;
