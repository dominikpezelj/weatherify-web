import { Box, Divider, Stack, Typography } from '@mui/material';

export const Copyright = () => (
  <Box>
    <Divider />
    <Stack sx={{ flex: 1, height: '2rem', justifyContent: 'center', alignItems: 'center' }}>
      <Typography sx={{ fontSize: '13px', fontWeight: '700' }}>
        Copyright © Weatherify 2022
      </Typography>
    </Stack>
  </Box>
);
