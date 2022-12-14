import { Box, Stack, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { usePrepareWeatherData } from '../../hooks/usePrepareWeatherData';
import { weatherActions } from '../../store/weather';
import { CurrentAlerts } from './CurrentAlerts';
import { CurrentCard } from './CurrentCard';
import { CurrentWindInfo } from './CurrentWindInfo';

export const CurrentFeed = () => {
  const theme = useTheme();
  const { textCards, secondary, tertiary } = theme.colors;
  const dispatch = useDispatch();
  const { currentList, airQualityList, windList, windDegree, weatherAlerts } = usePrepareWeatherData();
  useEffect(() => {
    dispatch(weatherActions.weatherAlertsCount(weatherAlerts.length));
  }, [dispatch, weatherAlerts.length]);

  return (
    <Stack direction={'column'} spacing={3}>
      <Box sx={{ flex: 1, background: secondary, borderRadius: '1rem', p: '2rem', fontFamily: 'Roboto' }}>
        <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <CurrentCard
            title={'Current weather'}
            cardBgColor={tertiary}
            cardTextColor={textCards}
            cardBorderColor={secondary}
            dataList={currentList}
          />

          <CurrentCard
            title={'Air quality'}
            cardBgColor={tertiary}
            cardTextColor={textCards}
            cardBorderColor={secondary}
            dataList={airQualityList}
          />
        </Stack>
        <Stack
          direction="column"
          justifyContent="space-between"
          spacing={2}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <CurrentCard
            title={'Current weather'}
            cardBgColor={tertiary}
            cardTextColor={textCards}
            cardBorderColor={secondary}
            dataList={currentList}
          />

          <CurrentCard
            title={'Air quality'}
            cardBgColor={tertiary}
            cardTextColor={textCards}
            cardBorderColor={secondary}
            dataList={airQualityList}
          />
        </Stack>
      </Box>

      <Box sx={{ flex: 1, background: secondary, borderRadius: '1rem', p: '2rem', fontFamily: 'Roboto' }}>
        <CurrentWindInfo
          title={'Wind information'}
          cardBgColor={tertiary}
          cardTextColor={textCards}
          cardBorderColor={secondary}
          dataList={windList}
          windDegree={windDegree}
        />
      </Box>
      {weatherAlerts.length > 0 && (
        <Box id="alerts" sx={{ flex: 1, background: secondary, borderRadius: '1rem', p: '2rem', fontFamily: 'Roboto' }}>
          <CurrentAlerts
            title={'Weather alerts'}
            cardBgColor={tertiary}
            cardTextColor={textCards}
            cardBorderColor={secondary}
            alertList={weatherAlerts}
          />
        </Box>
      )}
    </Stack>
  );
};
