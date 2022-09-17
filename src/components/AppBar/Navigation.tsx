import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Container, IconButton, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { appName, menuItems } from '../../common/constants';
import { NavigationDrawer } from './NavigationDrawer';
import { NavigationLogo } from './NavigationLogo';

export const Navigation = () => {
  const [state, setState] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({
    name: '',
    country: '',
    region: '',
    tz_id: '',
    temp_c: 0,
    icon: '',
    localtime: '',
  });
  const theme = useTheme();
  const { white } = theme.colors;

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const weather = useSelector((state: any) => state.weather.weatherCurrent);
  useEffect(() => {
    if (weather) {
      const { name, country, region, tz_id, localtime } = weather.location;
      const { temp_c } = weather.current;
      const { icon } = weather.current.condition;
      setWeatherInfo({
        name,
        country,
        localtime,
        region,
        tz_id,
        temp_c: Math.round(temp_c),
        icon,
      });
    }
  }, [weather]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavigationLogo
            variant={'h6'}
            title={appName}
            display={{ xs: 'none', md: 'flex' }}
            iconColor={'#ffbf00'}
            iconSize={'30px'}
            titleSize={'19px'}
            titleColor={white}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              style={{ color: white }}
            >
              <MenuIcon />
            </IconButton>
            <NavigationDrawer
              toggleDrawer={toggleDrawer}
              menuItems={menuItems}
              state={state}
              weatherInfo={weatherInfo}
            />
          </Box>
          <NavigationLogo
            variant={'h5'}
            title={appName}
            display={{ xs: 'flex', md: 'none' }}
            iconColor={'#ffbf00'}
            iconSize={'26px'}
            titleSize={'18px'}
            flexGrow={1}
            titleColor={white}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {menuItems.map((page) => (
              <Link to={page.path} style={{ textDecoration: 'none' }} key={page.route}>
                <Button key={page.route} sx={{ color: white, display: 'block' }}>
                  {page.route}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, color: white }}>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
              <img src={weatherInfo.icon} width="35px" alt="Weather condition icon" />
              <Typography sx={{ fontSize: '24px', fontWeight: '900' }}>{weatherInfo.temp_c} °C</Typography>
              <Stack direction="column">
                <Typography>{weatherInfo.name}</Typography>
              </Stack>
            </Stack>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, color: white }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <img src={weatherInfo.icon} width="26px" alt="Weather condition icon" />
              <Typography sx={{ fontSize: '18px', fontWeight: '900' }}>{weatherInfo.temp_c} °C</Typography>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
