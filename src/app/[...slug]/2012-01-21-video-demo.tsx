import { Link, Stack, Typo } from '@/components';
import Video from '../../components/Video';

export const categories = ['caps lock', 'num lock', 'social media', 'video'];
export const tags = ['caps lock', 'discuss', 'num lock', 'scroll lock', 'social', 'software', 'video'];
export const content = (
  <>
    <Typo variant="header1">Video demo</Typo>
    <Typo variant="paragraph">
      Short video demonstration of <strong>Keyboard LEDs</strong> software:
    </Typo>
    <Stack alignItems="center" padding="1rem 0">
      <Video video="demo" size="16x9" />
    </Stack>
  </>
);
