import { Box, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { green } from '@mui/material/colors';

export function MainLayout() {
  return (
    <>
      <Box component='header'>
        <Typography component='h1'>SOY EL MAIN LAYOUT</Typography>
        <Link to='/'>GO TO HOME</Link>
      </Box>

      <Box component='main' sx={{ backgroundColor: green[300] }}>
        <Outlet />
      </Box>

      <Box component='footer'>SOY EL FOOTER</Box>
    </>
  );
}
