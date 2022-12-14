import { Container } from '@mui/material';
import { CurrentAlertNotification } from '../../components/Current/CurrentAlertNotification';
import { CurrentFeed } from '../../components/Current/CurrentFeed';
import { Header } from '../../components/Header/Header';
import { FetchData } from '../../lib/FetchData';

export const Current = () => {
  FetchData();

  return (
    <div>
      <Header />
      <CurrentAlertNotification />
      <Container maxWidth={'lg'} sx={{ pt: '2rem' }}>
        <CurrentFeed />
      </Container>
    </div>
  );
};
