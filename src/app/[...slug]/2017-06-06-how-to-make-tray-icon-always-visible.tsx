import { APP_NAME } from '@/config';
import { Link, Stack, Typo } from '@/components';
import Video from '@/components/Video';

export const categories = ['news', 'software', 'video'];
export const tags = ['indicator', 'install', 'system tray', 'tray icon', 'video', 'windows'];
export const title = 'How to make tray icon always visible?';
export const content = (
  <>
    <Typo variant="paragraph">
      Lots of our customers ask this question when installing{' '}
      <Link href="/">
        <strong>{APP_NAME}</strong> software
      </Link>{' '}
      to Windows 7 and higher, the answer is simple:
    </Typo>
    <Typo variant="paragraph" style={{ fontStyle: 'italic' }}>
      Drag the icon using the mouse, from the hidden drop-down list to the visible area near the system clock.
    </Typo>
    <Typo variant="paragraph">Here is a video tutorial:</Typo>
    <Stack alignItems="center" padding="1rem 0">
      <Video size="4x3" video="tray" />
    </Stack>
    <Typo variant="paragraph">
      This trick works not only for our software, you can easily rearrange visible and hidden icons in the system
      notification area AKA <strong>System Tray</strong>.
    </Typo>
  </>
);
