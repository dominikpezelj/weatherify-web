import { Box, Typography } from '@mui/material';
import { CurrentCardProps } from '../types/current';
import { CurrentCardItem } from './CurrentCardItem';

export const CurrentCard = ({ title, cardBgColor, cardTextColor, cardBorderColor, dataList }: CurrentCardProps) => {
  return (
    <Box sx={{ flex: 1, background: cardBgColor, color: cardTextColor, p: '1rem', borderRadius: '1rem' }}>
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: '1rem',
          borderBottom: `3px solid ${cardBorderColor}`,
          fontWeight: 'bolder',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        {title}
      </Typography>

      {dataList.map((item) => (
        <CurrentCardItem title={item.title} value={item.value} measureUnit={item.measureUnit} key={item.title} />
      ))}
    </Box>
  );
};
