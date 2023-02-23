import { Box } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { grey } from '@mui/material/colors';

export function MainLayout() {
  return (
    <>
      <Box
        component='header'
        sx={{
          position: 'sticky',
          top: 0,
          minHeight: '2rem',
          padding: '1rem',
          borderBottom: '1px solid black',
          backgroundColor: grey[50],
        }}
      >
        <Link to='/'>GO TO HOME</Link>
      </Box>

      <Outlet />
    </>
  );
}
