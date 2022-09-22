import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CardItem } from './CardItem';

interface CardItemProps {
  title: string;
  value: number;
  measureUnit: string;
}

export const CurrentFeed = () => {
  const [currentList, setCurrentList] = useState<CardItemProps[]>([]);
  const [airQualityList, setAirQualityList] = useState<CardItemProps[]>([]);
  const theme = useTheme();
  const { textCards, secondary, tertiary } = theme.colors;
  const weather = useSelector((state: any) => state.weather.weatherCurrent);
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
    }
  }, [weather]);

  return (
    <Box sx={{ flex: 1, background: secondary, borderRadius: '1rem', p: '2rem', fontFamily: 'Roboto' }}>
      <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Box sx={{ flex: 1, background: tertiary, color: textCards, p: '1rem', borderRadius: '1rem' }}>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pb: '1rem',
              borderBottom: `3px solid ${secondary}`,
              fontWeight: 'bolder',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            Current weather
          </Typography>

          {currentList &&
            currentList.map((item) => (
              <CardItem title={item.title} value={item.value} measureUnit={item.measureUnit} />
            ))}
        </Box>

        <Box sx={{ flex: 1, background: tertiary, color: textCards, p: '1rem', borderRadius: '1rem' }}>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pb: '1rem',
              borderBottom: `3px solid ${secondary}`,
              fontWeight: 'bolder',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            Air quality
          </Typography>

          {airQualityList &&
            airQualityList.map((item) => (
              <CardItem title={item.title} value={item.value} measureUnit={item.measureUnit} />
            ))}
        </Box>
      </Stack>
      <Stack direction="column" justifyContent="space-between" spacing={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Box sx={{ flex: 1, background: tertiary, color: textCards, p: '1rem', borderRadius: '1rem' }}>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pb: '1rem',
              borderBottom: `3px solid ${secondary}`,
              fontWeight: 'bolder',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            Current weather
          </Typography>

          {currentList &&
            currentList.map((item) => (
              <CardItem title={item.title} value={item.value} measureUnit={item.measureUnit} />
            ))}
        </Box>

        <Box sx={{ flex: 1, background: tertiary, color: textCards, p: '1rem', borderRadius: '1rem' }}>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pb: '1rem',
              borderBottom: `3px solid ${secondary}`,
              fontWeight: 'bolder',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            Air quality
          </Typography>

          {airQualityList &&
            airQualityList.map((item) => (
              <CardItem title={item.title} value={item.value} measureUnit={item.measureUnit} />
            ))}
        </Box>
      </Stack>
    </Box>
  );
};
