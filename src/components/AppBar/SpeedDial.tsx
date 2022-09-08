import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, SpeedDialAction } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import { Link } from 'react-router-dom';

const actions = [
  {
    icon: (
      <Link to="/settings">
        <SettingsIcon sx={{ display: 'block', color: 'rgba(0, 0, 0, 0.6)' }} />
      </Link>
    ),
    name: 'Settings',
  },
  {
    icon: (
      <Link to="/info">
        <SettingsIcon sx={{ display: 'block', color: 'rgba(0, 0, 0, 0.6)' }} />
      </Link>
    ),
    name: 'Test',
  },
];
export const SpeedDialMenu = () => {
  return (
    <Box
      sx={{
        height: 320,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
      }}
    >
      <SpeedDial
        ariaLabel="speed-dial"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<MenuIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
        ))}
      </SpeedDial>
    </Box>
  );
};
