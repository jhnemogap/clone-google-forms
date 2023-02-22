import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export function PreviewPage() {
  return (
    <>
      <Typography component='h1'>PREVIEW PAGE</Typography>
      <Link to='/builder'>GO TO BUILDER</Link>
    </>
  );
}
