import { Link, Typo } from '@/components';

export const categories = ['download', 'free', 'news', 'social media', 'software', 'website'];
export const tags = ['download', 'free', 'news', 'software'];
export const content = (
  <>
    <Typo variant="header1">Keyboard LEDs 1.5</Typo>
    <Typo variant="paragraph">
      Current version of{' '}
      <strong>
        <Link href="/">Keyboard LEDs</Link>
      </strong>{' '}
      software is <strong>1.5.3.17</strong>. It is free and available for <Link href="/download/">downloading</Link> at
      this site.
    </Typo>
    <Typo variant="paragraph">
      New version is coming soon, subscribe to our <Link href="/feed/">RSS feed</Link> or{' '}
      <Link href="https://twitter.com/KeyLeds">social media</Link> to be informed!
    </Typo>
  </>
);
