import { Box } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <>
      <Box
        component='header'
        sx={{
          marginBottom: '1rem',
          borderBottom: '1px solid black',
        }}
      >
        <Link to='/'>GO TO HOME</Link>
      </Box>

      <Box component='main'>
        <Outlet />
      </Box>
    </>
  );
}
