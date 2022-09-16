import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { Header } from '../../components/Header/Header';

export const Current = () => {
  const weather = useSelector((state: any) => state.weather);
  console.log(weather);
  const stringify = JSON.stringify(weather);
  return (
    <div>
      <Header />
      <Container maxWidth={'md'}>
        Test
        {stringify}
      </Container>
    </div>
  );
};
