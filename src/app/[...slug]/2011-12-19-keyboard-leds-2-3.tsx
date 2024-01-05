import { Link, Typo } from '@/components';

export const categories = ['download', 'free', 'news', 'social media', 'software', 'website'];
export const tags = ['analytics', 'download', 'free', 'indicator', 'news', 'osd', 'screen', 'social', 'sound'];
export const content = (
  <>
    <Typo variant="header1">Keyboard LEDs 2.7</Typo>
    <Typo variant="paragraph">
      New <strong>Keyboard LEDs 2.3</strong> is released.
    </Typo>
    <Typo variant="list">
      <li>OSD always fits the screen area and semitransparent by default.</li>
      <li>Animated OSD disappearing for auto-hide mode added.</li>
      <li>No more multiple beeps when a lock button is pressed and held.</li>
      <li>
        <Link href="http://karpolan.com/services/ping-notify/">PingNotify&trade;</Link> event tracking restricted to few
        times per day.
      </li>
      <li>
        <Link href="https://plus.google.com/100902470509642576868">Google+</Link> social icon added.
      </li>
      <li>Installer and unistaller were improved.</li>
    </Typo>

    <Typo variant="paragraph">
      Please <Link href="/download/">download the latest version of software</Link>.
    </Typo>
  </>
);
