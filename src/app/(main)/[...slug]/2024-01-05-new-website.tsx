import { Link, Typo } from '@/components';

export const categories = ['news', 'website'];
export const tags = ['website', 'internet', 'domain'];
export const title = 'New Website';
export const content = (
  <>
    <Typo variant="paragraph">
      We recrate our website from scratch, using <Link href="https://nextjs.org/">Next.js</Link> framework.
    </Typo>
    <Typo variant="paragraph">It is a static website now. It is fast, secure and easy to maintain.</Typo>
  </>
);
