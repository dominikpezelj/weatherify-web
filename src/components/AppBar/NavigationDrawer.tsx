import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloudIcon from '@mui/icons-material/Cloud';
import InfoIcon from '@mui/icons-material/Info';
import ScheduleIcon from '@mui/icons-material/Schedule';

import ThermostatIcon from '@mui/icons-material/Thermostat';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { appName } from '../../common/constants';
import { NavigationDrawerProps } from '../types/app-bar';
import { BottomMenu } from './BottomMenu';
import { Copyright } from './Copyright';
import { NavigationLogo } from './NavigationLogo';

export const NavigationDrawer = ({ menuItems, state, weatherInfo, toggleDrawer }: NavigationDrawerProps) => {
  const [value, setValue] = useState(5);
  const theme = useTheme();
  const { primary } = theme.palette.text;
  const { skeleton } = theme.colors;
  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: '5rem' }}>
        <NavigationLogo
          variant={'h6'}
          title={appName}
          titleColor={primary}
          display={{ xs: 'flex', md: 'none' }}
          iconColor={'#ffbf00'}
          iconSize={'32px'}
          titleSize={'18px'}
        />
      </Stack>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        sx={{ height: '5rem', justifyContent: 'space-around', color: primary }}
      >
        <Box>
          {weatherInfo.name && weatherInfo.country && weatherInfo.tz_id && (
            <Box>
              <Typography
                sx={{
                  fontSize: '13px',
                  lineHeight: '15px',
                  fontFamily: 'Roboto',
                  fontWeight: 300,
                  textTransform: 'uppercase',
                }}
              >
                {weatherInfo.name}
              </Typography>
              <Typography sx={{ fontSize: '13px', lineHeight: '15px', fontFamily: 'Roboto', fontWeight: 300 }}>
                {weatherInfo.country}
              </Typography>
              <Typography sx={{ fontSize: '13px', lineHeight: '15px', fontFamily: 'Roboto', fontWeight: 300 }}>
                {weatherInfo.tz_id}
              </Typography>
            </Box>
          )}
          {!weatherInfo.name && (
            <Skeleton variant="text" width={'80px'} sx={{ bgcolor: skeleton, fontSize: '1.2rem' }} />
          )}
          {!weatherInfo.country && (
            <Skeleton variant="text" width={'80px'} sx={{ bgcolor: skeleton, fontSize: '1.0rem' }} />
          )}
          {!weatherInfo.tz_id && (
            <Skeleton variant="text" width={'80px'} sx={{ bgcolor: skeleton, fontSize: '1.0rem' }} />
          )}
        </Box>
        {weatherInfo.localtime && (
          <Typography sx={{ fontSize: '24px', fontWeight: '900' }}>
            {weatherInfo.localtime.substr(weatherInfo.localtime.length - 5)}
          </Typography>
        )}
        {!weatherInfo.localtime && (
          <Skeleton variant="rounded" width={'60px'} height={'30px'} sx={{ bgcolor: skeleton }} />
        )}
      </Stack>
      <Divider />
      <List sx={{ pt: 0 }}>
        {menuItems.map((item, index) => (
          <Link to={item.path} style={{ textDecoration: 'none' }} key={item.route}>
            <ListItem disablePadding>
              <ListItemButton>
                {
                  <ListItemIcon sx={{ minWidth: '2.5rem' }}>
                    {index === 0 && <CloudIcon />}
                    {index === 1 && <ThermostatIcon />}
                    {index === 2 && <AutoAwesomeIcon />}
                    {index === 3 && <ScheduleIcon />}
                    {index === 4 && <InfoIcon />}
                  </ListItemIcon>
                }
                <ListItemText primary={item.route} sx={{ fontWeight: '900 !important', color: primary }} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Fragment>
      <Drawer open={state} onClose={toggleDrawer(false)} sx={{ display: { xs: 'block', md: 'none' } }}>
        {list()}
        <Stack direction="row" justifyContent="center" alignItems="flex-end" spacing={0} sx={{ flexGrow: 1 }}>
          <BottomMenu value={value} setValue={setValue} toggleDrawer={toggleDrawer} />
        </Stack>
        <Copyright />
      </Drawer>
    </Fragment>
  );
};
