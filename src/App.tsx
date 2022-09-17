import { Box, useTheme } from '@mui/material';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/AppBar/Navigation';
import { SpeedDialMenu } from './components/AppBar/SpeedDial';
import { Astronomy } from './pages/Astronomy/Astronomy';
import { Current } from './pages/Current/Current';
import { Forecast } from './pages/Forecast/Forecast';
import { Info } from './pages/Info/Info';
import { Settings } from './pages/Settings/Settings';
import { Timezones } from './pages/Timezones/Timezones';

function App() {
  const theme = useTheme();
  const { tertiary } = theme.colors;

  return (
    <BrowserRouter>
      <Box style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', background: tertiary }}>
        <Box style={{ flex: 1 }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Current />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/astronomy" element={<Astronomy />} />
            <Route path="/timezones" element={<Timezones />} />
            <Route path="/info" element={<Info />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
        <SpeedDialMenu />
      </Box>
    </BrowserRouter>
  );
}

export default App;
