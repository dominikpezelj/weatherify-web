import MenuIcon from '@mui/icons-material/Menu';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { appName, menuItems } from '../../common/constants';
import { NavigationDrawer } from './NavigationDrawer';
import { NavigationLogo } from './NavigationLogo';

export const Navigation = () => {
  const [state, setState] = useState(false);
  const theme = useTheme();
  const { primary } = theme.palette.text;

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
          <NavigationLogo
            variant={'h6'}
            title={appName}
            display={{ xs: 'none', md: 'flex' }}
            iconColor={'#ffbf00'}
            iconSize={'30px'}
            titleSize={'19px'}
          />

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
          <NavigationLogo
            variant={'h5'}
            title={appName}
            display={{ xs: 'flex', md: 'none' }}
            iconColor={'#ffbf00'}
            iconSize={'21px'}
            titleSize={'15px'}
            flexGrow={1}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {menuItems.map((page) => (
              <Link to={page.path} style={{ textDecoration: 'none' }} key={page.route}>
                <Button key={page.route} href={page.path} sx={{ color: primary, display: 'block' }}>
                  {page.route}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
              <ThunderstormIcon sx={{ fontSize: '26px' }} />
              <Typography sx={{ fontSize: '24px', fontWeight: '900' }}>26° C</Typography>
              <Stack direction="column">
                <Typography>Sisak</Typography>
                <Typography>Croatia</Typography>
              </Stack>
            </Stack>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <ThunderstormIcon sx={{ fontSize: '21px' }} />
              <Typography sx={{ fontSize: '13px', fontWeight: '900' }}>26° C</Typography>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
