import MenuIcon from '@mui/icons-material/Menu';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Box, Button, Container, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { appName, menuItems } from '../../common/constants';
import { NavigationDrawer } from './NavigationDrawer';
export const Navigation = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  console.log(state);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <WbSunnyIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '32px', color: '#ffbf00' }}
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {appName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <NavigationDrawer toggleDrawer={toggleDrawer} menuItems={menuItems} state={state} />
          </Box>
          <WbSunnyIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: '32px', color: '#ffbf00' }}
          />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {appName}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', justifyContent: 'center' },
            }}
          >
            {menuItems.map((page) => (
              <Link to={page.path} style={{ textDecoration: 'none' }} key={page.route}>
                <Button
                  key={page.route}
                  href={page.path}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.route}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
              <ThunderstormIcon sx={{ fontSize: '26px' }} />
              <Typography sx={{ fontSize: '24px', fontWeight: '900' }}>26° C</Typography>
              <Stack direction="column" sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Typography>Sisak</Typography>
                <Typography>Croatia</Typography>
              </Stack>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
