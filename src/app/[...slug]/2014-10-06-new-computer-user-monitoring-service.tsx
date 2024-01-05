import { Link, Typo } from '@/components';

export const categories = ['news', 'software', 'website'];
export const tags = ['download', 'software', 'feature', 'switch', 'website'];
export const content = (
  <>
    <Typo variant="header1">New computer user monitoring service</Typo>
    <Typo variant="paragraph">We often receive feedback like that:</Typo>
    <Typo variant="paragraph">
      New computer user monitoring service has been announced by{' '}
      <b>
        <Link href="https://www.refog.com">Refog</Link>
      </b>
      . The solution called{' '}
      <b>
        <Link href="https://www.hoverwatch.com">Hoverwatch</Link>
      </b>{' '}
      shows what&apos;s being done on a phone or computer. It&apos;s aimed at caring parents and concerned employers.
      The web service is available immediately as a free trial or as paid subscription.
    </Typo>
  </>
);
