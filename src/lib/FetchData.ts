import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyGetCurrentWeatherByCoordinatesQuery, useLazyGetCurrentWeatherByLocationQuery } from '../api/api';
import { apiKey } from '../common/constants';
import { useGetCoordinates } from '../hooks/useGetCoordinates';
import { weatherActions } from '../store/weather';

export const FetchData = () => {
  const dispatch = useDispatch();
  const isSearched = useSelector((state: any) => state.weather.weatherSearch);
  const searchValue = useSelector((state: any) => state.weather.weatherSearchCompleted);

  const coordinates = useGetCoordinates();
  const { latitude, longitude } = coordinates;

  const [triggerCoords, { data, isFetching, error }] = useLazyGetCurrentWeatherByCoordinatesQuery();

  const [triggerLocation, { data: weatherData, isFetching: weatherIsFetching, error: weatherError }] =
    useLazyGetCurrentWeatherByLocationQuery();

  useEffect(() => {
    if (!isSearched && latitude && longitude) {
      triggerCoords(
        {
          key: apiKey,
          lat: latitude,
          lon: longitude,
        },
        true,
      );
      dispatch(weatherActions.weatherCurrent(data));
    } else {
      if (searchValue) {
        triggerLocation({ key: apiKey, value: searchValue }, true);
        dispatch(weatherActions.weatherCurrent(weatherData));
      }
    }
  }, [data, dispatch, isSearched, latitude, longitude, searchValue, triggerCoords, triggerLocation, weatherData]);

  return { isFetching, weatherIsFetching, error, weatherError };
};
