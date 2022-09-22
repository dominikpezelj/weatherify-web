import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CoordsData, Locations, SearchData } from './types';
import { Forecast } from './types/forecast';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.weatherapi.com/v1/',
  }),
  endpoints: (builder) => ({
    getLocationByName: builder.query<Locations[], SearchData>({
      query: (searchData) => `search.json?key=${searchData.key}&q=${searchData.value}`,
    }),
    getCurrentWeatherByLocation: builder.query<Forecast[], SearchData>({
      query: (weatherData) => `forecast.json?key=${weatherData.key}&q=${weatherData.value}&days=1&aqi=yes&alerts=yes`,
    }),
    getCurrentWeatherByCoordinates: builder.query<Forecast[], CoordsData>({
      query: (coordsData) =>
        `forecast.json?key=${coordsData.key}&q=${coordsData.lat},${coordsData.lon}&days=1&aqi=yes&alerts=yes`,
    }),
  }),
});

export const {
  useGetLocationByNameQuery,
  useLazyGetCurrentWeatherByLocationQuery,
  useLazyGetCurrentWeatherByCoordinatesQuery,
} = api;
