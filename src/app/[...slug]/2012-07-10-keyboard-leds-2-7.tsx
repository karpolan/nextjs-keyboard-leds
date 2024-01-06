import { Link, Typo } from '@/components';

export const categories = ['download', 'free', 'news', 'software', 'website'];
export const tags = ['download', 'feature', 'free', 'memory', 'news'];
export const title = 'Keyboard LEDs 2.7';
export const content = (
  <>
    <Typo variant="paragraph">
      <strong>Keyboard LEDs 2.7</strong> has been released.
    </Typo>
    <Typo variant="paragraph">
      Added new option to disable Internet features (Check for updates,{' '}
      <Link href="https://karpolan.com/services/ping-notify/">PingNotify™ statistics</Link>, etc.)
    </Typo>
    <Typo variant="paragraph">Also the memory consumption has been improved.</Typo>
    <Typo variant="paragraph">
      Please <Link href="/download/">download the latest release</Link> of our software.
    </Typo>
  </>
);
