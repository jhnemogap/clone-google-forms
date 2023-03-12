import { Box } from '@mui/material';

import { EditorHeader, FormBuilder } from '@editor/components';
import { blue } from '@mui/material/colors';

export function EditorPage() {
  return (
    <Box
      component='main'
      minHeight='calc(100vh - 5.5rem)'
      py='1rem'
      bgcolor={blue[50]}
    >
      <EditorHeader />
      <FormBuilder />
    </Box>
  );
}
