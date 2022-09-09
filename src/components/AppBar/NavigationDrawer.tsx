import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloudIcon from '@mui/icons-material/Cloud';
import InfoIcon from '@mui/icons-material/Info';
import ScheduleIcon from '@mui/icons-material/Schedule';

import ThermostatIcon from '@mui/icons-material/Thermostat';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { appName } from '../../common/constants';
import { BottomMenu } from './BottomMenu';
import { Copyright } from './Copyright';
import { NavigationLogo } from './NavigationLogo';

type NavigationDrawerProps = {
  menuItems: MenuItems[];
  state: boolean;
  toggleDrawer(open: boolean): any; //check type
};

type MenuItems = {
  route: string;
  path: string;
};

export const NavigationDrawer = ({ menuItems, state, toggleDrawer }: NavigationDrawerProps) => {
  const [value, setValue] = useState(5);
  const theme = useTheme();
  const { primary, secondary } = theme.palette.text;
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: '5rem' }}>
        <NavigationLogo
          variant={'h6'}
          title={appName}
          titleColor={secondary}
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
        sx={{ height: '5rem', justifyContent: 'space-around', color: secondary }}
      >
        <ThunderstormIcon sx={{ fontSize: '26px' }} />
        <Typography sx={{ fontSize: '24px', fontWeight: '900' }}>26° C</Typography>
        <Stack direction="column" sx={{ display: 'flex' }}>
          <Typography>Sisak</Typography>
          <Typography>Croatia</Typography>
        </Stack>
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
                <ListItemText
                  primary={item.route}
                  sx={{ fontWeight: '900 !important', color: secondary }}
                />
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
      <Drawer
        open={state}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {list()}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          spacing={0}
          sx={{ flexGrow: 1 }}
        >
          <BottomMenu value={value} setValue={setValue} toggleDrawer={toggleDrawer} />
        </Stack>
        <Copyright />
      </Drawer>
    </Fragment>
  );
};
