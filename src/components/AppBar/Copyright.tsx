import { Box, Divider, Stack, Typography, useTheme } from '@mui/material';

export const Copyright = () => {
  const theme = useTheme();
  const { primary, secondary } = theme.palette.text;
  return (
    <Box>
      <Divider />
      <Stack sx={{ flex: 1, height: '2rem', justifyContent: 'center', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '13px', fontWeight: '700', color: primary }}>
          Copyright © Weatherify 2022
        </Typography>
      </Stack>
    </Box>
  );
};
