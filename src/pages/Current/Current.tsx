import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { Header } from '../../components/Header/Header';
import { useGetCoordinates } from '../../hooks/useGetCoordinates';
import { FetchData } from '../../lib/FetchData';
import { CurrentFeed } from './CurrentFeed';

export const Current = () => {
  const { isFetching, weatherIsFetching } = FetchData();
  const weather = useSelector((state: any) => state.weather.weatherCurrent);
  const stringify = JSON.stringify(weather);
  const coordinates = useGetCoordinates();
  const { latitude, longitude } = coordinates;
  return (
    <div>
      <Header />
      <Container maxWidth={'lg'} sx={{ pt: '2rem' }}>
        Test
        {/* {stringify} */}
        {latitude} lon: {longitude}
        <CurrentFeed />
      </Container>
    </div>
  );
};
