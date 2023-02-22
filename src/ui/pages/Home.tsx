import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <>
      <Typography component='h1'>HOME PAGE</Typography>
      <Link to='/builder'>GO TO BUILDER</Link>
    </>
  );
}
