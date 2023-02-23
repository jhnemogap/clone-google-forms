import { Box } from '@mui/material';
import { blue } from '@mui/material/colors';

export function BuilderPage() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 2rem)',
        padding: '1rem 1rem 2rem',
        backgroundColor: blue[200],
      }}
    >
      <Box component='header'>
        HEADER BUILDER
      </Box>
      <Box component='main'>
        {Array(10).fill('MAIN BUILDER').map((v) => <p>{v}</p>)}
      </Box>
    </Box>
  );
}
