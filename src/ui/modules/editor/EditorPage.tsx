import { Box } from '@mui/material';
import { blue } from '@mui/material/colors';

import { EditorHeader, FormBuilder } from '@editor/components';

export function EditorPage() {
  return (
    <Box component='main' minHeight='calc(100vh - 5.5rem)' py='1rem' bgcolor={blue[50]}>
      <EditorHeader />
      <FormBuilder />
    </Box>
  );
}
