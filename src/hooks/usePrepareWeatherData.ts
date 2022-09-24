import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardItemProps } from '../components/types/current';
import { weatherActions } from '../store/weather';

export const usePrepareWeatherData = () => {
  const [currentList, setCurrentList] = useState<CardItemProps[]>([]);
  const [airQualityList, setAirQualityList] = useState<CardItemProps[]>([]);
  const weather = useSelector((state: any) => state.weather.weatherCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    if (weather) {
      const { current } = weather;
      const { air_quality } = current;

      const airQualityData = [
        {
          title: '[CO] Carbon monoxide',
          value: air_quality.co.toFixed(2),
          measureUnit: ' µg/m³',
        },
        {
          title: '[NO₂] Nitrogen dioxide',
          value: air_quality.no2.toFixed(2),
          measureUnit: ' µg/m³',
        },
        {
          title: '[O₃] Ozone',
          value: air_quality.o3.toFixed(2),
          measureUnit: ' µg/m³',
        },
        {
          title: '[SO₂] Sulfur dioxide',
          value: air_quality.so2.toFixed(2),
          measureUnit: ' µg/m³',
        },
        {
          title: '[PM2.5] Particulate matter',
          value: air_quality.pm2_5.toFixed(2),
          measureUnit: ' µg/m³',
        },
        {
          title: '[PM10] Particulate matter',
          value: air_quality.pm10.toFixed(2),
          measureUnit: ' µg/m³',
        },
      ];

      const currentData = [
        {
          title: 'Temperature',
          value: current.temp_c,
          measureUnit: ' °C',
        },
        {
          title: 'Humidity',
          value: current.humidity,
          measureUnit: ' %',
        },
        {
          title: 'Pressure',
          value: current.pressure_mb,
          measureUnit: ' hPa',
        },
        {
          title: 'UV Index',
          value: current.uv,
          measureUnit: '',
        },
        {
          title: 'Visibility',
          value: current.vis_km,
          measureUnit: ' km',
        },
        {
          title: 'Precip',
          value: current.precip_mm,
          measureUnit: ' mm',
        },
      ];
      setCurrentList(currentData);
      setAirQualityList(airQualityData);
      dispatch(weatherActions.weatherIsLoading(false));
    } else {
      const airQualityData = [
        {
          title: '[CO] Carbon monoxide',
          value: null,
          measureUnit: null,
        },
        {
          title: '[NO₂] Nitrogen dioxide',
          value: null,
          measureUnit: null,
        },
        {
          title: '[O₃] Ozone',
          value: null,
          measureUnit: null,
        },
        {
          title: '[SO₂] Sulfur dioxide',
          value: null,
          measureUnit: null,
        },
        {
          title: '[PM2.5] Particulate matter',
          value: null,
          measureUnit: null,
        },
        {
          title: '[PM10] Particulate matter',
          value: null,
          measureUnit: null,
        },
      ];

      const currentData = [
        {
          title: 'Temperature',
          value: null,
          measureUnit: null,
        },
        {
          title: 'Humidity',
          value: null,
          measureUnit: null,
        },
        {
          title: 'Pressure',
          value: null,
          measureUnit: null,
        },
        {
          title: 'UV Index',
          value: null,
          measureUnit: null,
        },
        {
          title: 'Visibility',
          value: null,
          measureUnit: null,
        },
        {
          title: 'Precip',
          value: null,
          measureUnit: null,
        },
      ];
      setCurrentList(currentData);
      setAirQualityList(airQualityData);
      dispatch(weatherActions.weatherIsLoading(true));
    }
  }, [dispatch, weather]);

  return { currentList, airQualityList };
};
