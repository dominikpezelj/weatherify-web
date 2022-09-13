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
