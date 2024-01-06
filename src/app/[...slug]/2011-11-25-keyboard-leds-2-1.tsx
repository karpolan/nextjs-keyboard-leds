import { Link, Typo } from '@/components';

export const categories = ['download', 'free', 'news', 'software'];
export const tags = [
  'analytics',
  'download',
  'feature',
  'indicator',
  'install',
  'news',
  'osd',
  'software',
  'system tray',
  'tray icon',
];
export const title = 'Keyboard LEDs 2.1';
export const content = (
  <>
    <Typo variant="paragraph">
      <strong>Keyboard LEDs 2.1</strong> has been released.
    </Typo>
    <Typo variant="list">
      <li>Fixed unexpected hiding of the OSD while dragging with mouse.</li>
      <li>Tray Icon tooltip shows the program version.</li>
      <li>
        Added <Link href="https://karpolan.com/services/ping-notify/">PingNotify™</Link> events tracking.
      </li>
      <li>Fixed UAC elevation of program run from the installer.</li>
    </Typo>
    <Typo variant="paragraph">
      Please <Link href="/download/">update your copy</Link>.
    </Typo>
  </>
);
