import RestoreIcon from '@mui/icons-material/Restore';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Divider, useTheme } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from 'react-router-dom';

type BottomMenuProps = {
  value: number;
  setValue(value: number): void;
  toggleDrawer(open: boolean): any;
};

export const BottomMenu = ({ value, setValue, toggleDrawer }: BottomMenuProps) => {
  const theme = useTheme();
  const { primary, secondary } = theme.palette.text;
  return (
    <Box>
      <Divider />
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ background: 'transparent', color: primary }}
      >
        <BottomNavigationAction
          component={Link}
          to="/settings"
          label="Test"
          icon={<RestoreIcon />}
          sx={{ width: '125px', color: primary }}
          onClick={toggleDrawer(false)}
        />
        <BottomNavigationAction
          component={Link}
          to="/settings"
          label="Settings"
          icon={<SettingsIcon />}
          sx={{ width: '125px', color: primary }}
          onClick={toggleDrawer(false)}
        />
      </BottomNavigation>
    </Box>
  );
};
