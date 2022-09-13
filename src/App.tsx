import { Paper, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/AppBar/Navigation';
import { SpeedDialMenu } from './components/AppBar/SpeedDial';
import { Astronomy } from './pages/Astronomy/Astronomy';
import { Current } from './pages/Current/Current';
import { Forecast } from './pages/Forecast/Forecast';
import { Info } from './pages/Info/Info';
import { Settings } from './pages/Settings/Settings';
import { Timezones } from './pages/Timezones/Timezones';
import { darkTheme } from './theme/darkTheme';
import { lightTheme } from './theme/lightTheme';

function App() {
  useSelector((state: any) => state.navigation.isDarkModeEnabled);
  const themeState = localStorage.getItem('theme');
  return (
    <ThemeProvider theme={themeState === 'false' ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Paper style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            <Navigation />
            <Routes>
              <Route path="/" element={<Current />} />
              <Route path="/forecast" element={<Forecast />} />
              <Route path="/astronomy" element={<Astronomy />} />
              <Route path="/timezones" element={<Timezones />} />
              <Route path="/info" element={<Info />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
          <SpeedDialMenu />
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
