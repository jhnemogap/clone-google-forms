import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

import { ROUTES } from '@routes/routes';

export function PreviewPage() {
  return (
    <>
      <Typography component='h1'>PREVIEW PAGE</Typography>
      <Link to={ROUTES.builder}>GO TO EDITOR</Link>
    </>
  );
}
