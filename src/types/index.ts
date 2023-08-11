export type UseContextType = {
  data: StarWarsData[];
  setData: React.Dispatch<React.SetStateAction<StarWarsData[]>>;
};

export type StarWarsData = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export const InicialStarWarsData = {
  name: '',
  rotation_period: '',
  orbital_period: '',
  diameter: '',
  climate: '',
  gravity: '',
  terrain: '',
  surface_water: '',
  population: '',
  films: [],
  created: '',
  edited: '',
  url: '',
};

export type UserProviderType = {
  children: React.ReactNode;
};

export const INICIALPROVIDER = {
  data: [
    {
      name: '',
      rotation_period: '',
      orbital_period: '',
      diameter: '',
      climate: '',
      gravity: '',
      terrain: '',
      surface_water: '',
      population: '',
      films: [],
      created: '',
      edited: '',
      url: '',
    },
  ],
};

export type TypeUseApiFilter = {
  urlApi: string;
  notKey: string;
};

export type ReturnApiType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};
