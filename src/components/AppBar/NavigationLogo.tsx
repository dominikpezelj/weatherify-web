import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Stack, Typography } from '@mui/material';

type NavigationLogoProps = {
  title: string;
  titleColor: string;
  display: { xs: string; md: string };
  iconSize: string;
  iconColor: string;
};

export const NavigationLogo = ({
  title,
  titleColor,
  display,
  iconSize,
  iconColor,
}: NavigationLogoProps) => {
  return (
    <Stack direction="row" spacing={0}>
      <WbSunnyIcon sx={{ display: display, mr: 1, fontSize: iconSize, color: iconColor }} />
      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 2,
          display: display,
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
