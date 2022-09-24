import { Box, Skeleton, Stack, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { CardItemProps } from '../types/current';

export const CurrentCardItem = ({ title, value, measureUnit }: CardItemProps) => {
  const theme = useTheme();
  const { skeleton, secondary, tertiary, textCards } = theme.colors;

  const isDataLoading = useSelector((state: any) => state.weather.weatherIsLoading);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems={'center'}
      sx={{ background: 'transparent', p: '.3rem', borderBottom: `3px solid ${secondary}` }}
    >
      <Typography>{title}</Typography>
      <Box
        sx={{
          p: '0.5rem',
          background: secondary,
          borderRadius: '1rem',
          minWidth: '2rem',
          justifyContent: 'center',
          display: 'flex',
          fontWeight: 500,
        }}
      >
        {isDataLoading && <Skeleton variant="rounded" height={'1rem'} sx={{ bgcolor: skeleton, flex: 1 }} />}
        {!isDataLoading && value && measureUnit && value + measureUnit}
      </Box>
    </Stack>
  );
};
