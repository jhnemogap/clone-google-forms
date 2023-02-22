import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export function BuilderPage() {
  return (
    <>
      <Typography component='h1'>BUILDER PAGE</Typography>
      <Link to='/preview'>GO TO PREVIEW</Link>
    </>
  );
}
