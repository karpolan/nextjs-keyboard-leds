import { Link, Typo } from '@/components';

export const categories = ['caps lock', 'software', 'website'];
export const tags = ['analytics', 'caps lock', 'feedback', 'osd'];
export const title = 'A feedback from an email marketing company';
export const content = (
  <>
    <Typo variant="paragraph">We often receive feedback like that:</Typo>
    <Typo variant="paragraph">
      We have recently received a letter from{' '}
      <strong>
        <Link href="https://www.atompark.com">AtomPark Software</Link>
      </strong>{' '}
      a company developing email marketing software and providing email marketing services. The company representative
      stated, that <strong>Keyborad LEDs</strong> turned out to be quite a handy piece of software that helps the
      copyrighters streamline their work.
    </Typo>
    <Typo variant="paragraph" tag="q">
      <br />
      When you type and keep your eyes on the screen, it&apos;s quite easy to accidentally press the &quot;CAPS
      LOCK&quot; button and other buttons of the same type. It&apos;s quite distracting if you don&apos;t notice this.
      <br />
      <br />
      Keyboard LEDs helped our copyrighters streamline their work and made it more efficient.
      <br />
      <br />
      Accidental key pressings are not a problem now! Keyboard LEDs software does exactly what we need! Thank you!
      <br />
    </Typo>
    <Typo variant="paragraph">
      Hopefully, <strong>Atompark Software</strong> is not the only company who finds our software handy.
    </Typo>
    <Typo variant="paragraph">Thanks for the support!</Typo>
  </>
);
