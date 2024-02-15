import { Link, Typo } from '@/components';

export const categories = ['download', 'free', 'news', 'software'];
export const tags = ['download', 'feature', 'free', 'memory', 'osd', 'screen', 'system tray', 'tray icon'];
export const title = 'Keyboard LEDs 2.5';
export const content = (
  <>
    <Typo variant="paragraph">
      <strong>Keyboard LEDs 2.5</strong> has been released.
    </Typo>
    <Typo variant="list">
      <li>OSD sizes are changed to be bigger by default.</li>
      <li>Tray Icon color is changed to be visible on white background.</li>
      <li>Some other minor changes.</li>
    </Typo>
    <Typo variant="paragraph">
      Please <Link href="/download/">download the latest version</Link> of software.
    </Typo>
  </>
);
