import { Box, Typography } from '@mui/material';

export function HomePage() {
  return (
    <Box component='main'>
      <Typography component='h1'>
        HOME PAGE
      </Typography>
      <a href='/builder'>
        GO TO BUILDER
      </a>
    </Box>
  );
}
