import { Container, useTheme } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/Header/Header';
import { useGetCoordinates } from '../../hooks/useGetCoordinates';
import { FetchData } from '../../lib/FetchData';
import { weatherActions } from '../../store/weather';
import { CurrentFeed } from './CurrentFeed';

export const Current = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { primary, secondary, tertiary, textCards } = theme.colors;
  const wetherIsFetching = useSelector((state: any) => state.weather.weatherIsFetching);
  const { isFetching, weatherIsFetching } = FetchData();
  useEffect(() => {
    console.log(wetherIsFetching);
    if (isFetching || weatherIsFetching) {
      dispatch(weatherActions.weatherIsLoading(true));
    } else {
      dispatch(weatherActions.weatherIsLoading(true));
    }
  }, [wetherIsFetching, isFetching, weatherIsFetching, dispatch]);

  const weather = useSelector((state: any) => state.weather.weatherCurrent);
  const stringify = JSON.stringify(weather);
  const coordinates = useGetCoordinates();
  const { latitude, longitude } = coordinates;
  return (
    <div>
      <Header />
      <Container maxWidth={'lg'} sx={{ pt: '2rem' }}>
        {wetherIsFetching && <Skeleton variant="rounded" width={210} height={60} />}
        {!wetherIsFetching && <CurrentFeed />}
        {/* {stringify} */}
        {latitude} lon: {longitude}
        <Skeleton sx={{ bgcolor: secondary }} variant="rectangular" width={210} height={118} />
      </Container>
    </div>
  );
};
