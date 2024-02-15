import { Link, Typo } from '@/components';

export const categories = ['social media', 'software', 'feature'];
export const tags = ['discuss', 'facebook', 'feature', 'feedback', 'internet', 'social', 'software'];
export const title = 'What new feature do you want?';
export const content = (
  <>
    <Typo variant="paragraph">
      We are asking our customers what features do they want in the <Link href="/">Keyboard LEDs software</Link>.
    </Typo>
    <Typo variant="paragraph">
      You can also participate in{' '}
      <Link href="https://www.facebook.com/KeyLeds/posts/1275597815815311">discussion on our Facebook page</Link>.
    </Typo>
    <Typo variant="paragraph">Thank you for ideas :)</Typo>
  </>
);
