export type UseContextType = {
  data: StarWarsData[];
  setData: React.Dispatch<React.SetStateAction<StarWarsData[]>>;
  inputFilter: string;
  setInputFilter: React.Dispatch<React.SetStateAction<string>>;
  handleInputFilter: (event: React.ChangeEvent<HTMLInputElement>) => void
  dataFilter: StarWarsData[];
  setDataFilter: React.Dispatch<React.SetStateAction<StarWarsData[]>>;
  numericalValuesFilter: NumericalValuesFilter;
  setNumericalValuesFilter:React.Dispatch<React.SetStateAction<NumericalValuesFilter>>;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement |
  HTMLSelectElement>) => void;
  multiplesFiltersState: NumericalValuesFilter[];
  setMultiplesFiltersState: React
    .Dispatch<React.SetStateAction<NumericalValuesFilter[]>>;
  setOrderState: React.Dispatch<React.SetStateAction<OrderStateType>>;
  orderState: OrderStateType;
  handleChangeOrder: (event: React.
    ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
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
// 'population' | 'orbital_period' | 'diameter' | 'rotation_period' | 'surface_water';
export type NumericalValuesFilter = {
  columnFilter: string;
  comparisonFilter: string;
  valueFilter: string;
};

export const INICIAL_NUMERICAL_VALUES_FILTER = {
  columnFilter: 'population',
  comparisonFilter: 'maior que',
  valueFilter: '0',
};

export const INICIAL_ORDER = {
  column: 'population',
  sort: 'ASC',
};

export type OrderStateType = {
  column: string;
  sort: string;
};
