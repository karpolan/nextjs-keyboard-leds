import { Link, Typo } from '@/components';

export const categories = ['caps lock', 'download', 'free', 'news', 'num lock', 'software', 'website'];
export const tags = [
  'caps lock',
  'download',
  'free',
  'indicator',
  'memory',
  'news',
  'num lock',
  'osd',
  'scroll lock',
  'software',
  'switch',
];
export const content = (
  <>
    <Typo variant="header1">Keyboard LEDs 2.0</Typo>
    <Typo variant="paragraph">
      New major update of{' '}
      <strong>
        <Link href="/">Keyboard LEDs</Link>
      </strong>{' '}
      software has been released. There are following changes in version <strong>2.0</strong>:
    </Typo>
    <Typo variant="list">
      <li>Added option to automatically hide the OSD.</li>
      <li>
        Added buttons to <Link href="/">switch num lock and caps lock with a mouse</Link>.
      </li>
      <li>Added timer to catch lock switches in remote sessions and virtual machines.</li>
      <li>
        The OSD has a context menu now, double click opens the <Link href="/screenshots/">settings window</Link>.
      </li>
      <li>Fixed losing of input focus when the OSD appears first time.</li>
      <li>Decreased memory consumption, less the 1MB in idle!</li>
      <li>
        Distributed from <Link href="/">KEYBOARD-LEDS.COM</Link> website now.
      </li>
    </Typo>
    <Typo variant="paragraph">
      Please update your copy of program, you can <Link href="/download/">download installation package</Link> from
      official web site: <Link href="/">keyboard-leds.com</Link>
    </Typo>
    <Typo variant="paragraph">
      <strong>Keyboard LEDs</strong> is still free :)
    </Typo>
  </>
);
