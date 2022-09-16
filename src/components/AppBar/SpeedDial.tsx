import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, SpeedDialAction, useTheme } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import { Link } from 'react-router-dom';

export const SpeedDialMenu = () => {
  const theme = useTheme();
  const { white } = theme.colors;
  const { primary } = theme.palette.text;

  const actions = [
    {
      icon: (
        <Link to="/settings">
          <SettingsIcon sx={{ display: 'block', color: primary }} />
        </Link>
      ),
      name: 'Settings',
    },
    {
      icon: (
        <Link to="/info">
          <SettingsIcon sx={{ display: 'block', color: primary }} />
        </Link>
      ),
      name: 'Test',
    },
  ];
  return (
    <Box
      sx={{
        height: 320,
        transform: 'translateZ(0px)',
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        position: 'fixed',
        bottom: 16,
        right: 16,
      }}
    >
      <SpeedDial ariaLabel="speed-dial" sx={{}} icon={<MenuIcon style={{ color: white }} />}>
        {actions.map((action) => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
        ))}
      </SpeedDial>
    </Box>
  );
};
