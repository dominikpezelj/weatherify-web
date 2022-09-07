import { Info } from '@mui/icons-material';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/AppBar/Navigation';
import { Astronomy } from './pages/Astronomy/Astronomy';
import { Forecast } from './pages/Forecast/Forecast';
import { Home } from './pages/Home/Home';
import { Timezones } from './pages/Timezones/Timezones';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Box sx={{ pt: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/astronomy" element={<Astronomy />} />
          <Route path="/timezones" element={<Timezones />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
