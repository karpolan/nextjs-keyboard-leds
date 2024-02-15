import { Link, Typo } from '@/components';

export const categories = ['download', 'news', 'website'];
export const tags = ['internet', 'news', 'software', 'website'];
export const title = 'Website started!';
export const content = (
  <>
    <Typo variant="paragraph">
      Website for <Link href="https://karpolan.com/software/keyboard-leds/">Keyboard LEDs</Link> software on{' '}
      <Link href="https://keyboard-leds.com/">KEYBOARD-LEDS.COM</Link> domain has been started.
    </Typo>
    <Typo variant="paragraph">Hello World! :)</Typo>
  </>
);
