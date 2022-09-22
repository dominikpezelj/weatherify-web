import { Box, Stack, Typography, useTheme } from '@mui/material';

interface CardItemProps {
  title: string;
  value: number;
  measureUnit: string;
}

export const CardItem = ({ title, value, measureUnit }: CardItemProps) => {
  const theme = useTheme();
  const { primary, secondary, tertiary, textCards } = theme.colors;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems={'center'}
      sx={{ background: 'transparent', p: '.3rem', borderBottom: `3px solid ${secondary}` }}
    >
      <Typography>{title}</Typography>
      <Box sx={{ p: '0.5rem', background: secondary, borderRadius: '1rem' }}>
        {value} {measureUnit}
      </Box>
    </Stack>
  );
};
