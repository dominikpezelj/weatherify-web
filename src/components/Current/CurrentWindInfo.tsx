import NorthIcon from '@mui/icons-material/North';
import { Box, Stack, Typography } from '@mui/material';
import { CurrentCardProps } from '../types/current';
import { CurrentCardItem } from './CurrentCardItem';

export const CurrentWindInfo = ({
  title,
  cardBgColor,
  cardTextColor,
  cardBorderColor,
  dataList,
  windDegree,
}: CurrentCardProps) => {
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
      <Stack direction={'row'} justifyContent={'space-between'} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, maxWidth: '50%' }}>
          <NorthIcon sx={{ fontSize: '90px', rotate: `${windDegree}deg` }} />
        </Box>
        <Box sx={{ maxWidth: '50%', flex: 1 }}>
          {dataList?.map((item) => (
            <CurrentCardItem title={item.title} value={item.value} measureUnit={item.measureUnit} key={item.title} />
          ))}
        </Box>
      </Stack>

      <Stack direction={'column'} justifyContent={'space-between'} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, mb: '1rem', mt: '1rem' }}>
          <NorthIcon sx={{ fontSize: '90px', rotate: `${windDegree}deg` }} />
        </Box>
        <Box sx={{ flex: 1, borderTop: `3px solid ${cardBorderColor}` }}>
          {dataList?.map((item) => (
            <CurrentCardItem title={item.title} value={item.value} measureUnit={item.measureUnit} key={item.title} />
          ))}
        </Box>
      </Stack>
    </Box>
  );
};
