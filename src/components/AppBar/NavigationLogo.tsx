import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Stack, Typography } from '@mui/material';

type NavigationLogoProps = {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit'
    | undefined;
  title: string;
  titleSize: string;
  titleColor?: string;
  display: { xs: string; md: string };
  iconColor: string;
  iconSize: string;
  flexGrow?: number;
};

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
