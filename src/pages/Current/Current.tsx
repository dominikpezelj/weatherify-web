import { Container, useTheme } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentFeed } from '../../components/Current/CurrentFeed';
import { Header } from '../../components/Header/Header';
import { useGetCoordinates } from '../../hooks/useGetCoordinates';
import { FetchData } from '../../lib/FetchData';

export const Current = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { primary, secondary, tertiary, textCards } = theme.colors;
  const wetherIsFetching = useSelector((state: any) => state.weather.weatherIsFetching);
  const { isFetching, weatherIsFetching } = FetchData();
  /* useEffect(() => {
    console.log(wetherIsFetching);
    if (isFetching || weatherIsFetching) {
      dispatch(weatherActions.weatherIsLoading(true));
    } else {
      dispatch(weatherActions.weatherIsLoading(false));
    }
  }, [wetherIsFetching, isFetching, dispatch, weatherIsFetching]); */

  const weather = useSelector((state: any) => state.weather.weatherCurrent);
  const stringify = JSON.stringify(weather);
  const coordinates = useGetCoordinates();
  const { latitude, longitude } = coordinates;
  return (
    <div>
      <Header />
      <Container maxWidth={'lg'} sx={{ pt: '2rem' }}>
        <CurrentFeed />
        {latitude} lon: {longitude}
        <Skeleton sx={{ bgcolor: secondary }} variant="rectangular" width={210} height={118} />
      </Container>
    </div>
  );
};
