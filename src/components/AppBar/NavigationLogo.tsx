import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Stack, Typography } from '@mui/material';
import { NavigationLogoProps } from '../types/app-bar';

export const NavigationLogo = ({
  variant,
  title,
  titleSize,
  titleColor,
  display,
  iconColor,
  iconSize,
  flexGrow,
}: NavigationLogoProps) => {
  return (
    <Stack direction="row" spacing={0} sx={{ flexGrow }}>
      <WbSunnyIcon sx={{ display: display, mr: 1, fontSize: iconSize, color: iconColor }} />
      <Typography
        variant={variant}
        noWrap
        sx={{
          display: display,
          fontSize: titleSize,
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: titleColor,
          textDecoration: 'none',
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};
