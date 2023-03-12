import { Stack } from '@mui/material';

import { QuestionCard, SectionCard } from './components';

export function FormBuilder() {
  return (
    <Stack
      component='section'
      maxWidth='48rem'
      m='auto'
      pt='1rem'
      px='1rem'
      spacing='0.75rem'
    >
      <SectionCard />
      <QuestionCard />
    </Stack>
  );
}
