export interface Locations {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

export interface SearchData {
  key: string;
  value: unknown;
}

export interface CoordsData {
  key: string;
  lat: number;
  lon: number;
}
