import { Link, Typo } from '@/components';

export const categories = ['software', 'website'];
export const tags = ['discuss', 'documents', 'legal', 'software', 'website'];
export const content = (
  <>
    <Typo variant="header1">Legal documents added</Typo>
    <Typo variant="paragraph">Legal documents have been added to our site:</Typo>
    <Typo variant="list">
      <li>
        <Link href="/legal/legal-notices/">Legal notices</Link>
      </li>
      <li>
        <Link href="/legal/privacy-policy/">Privacy policy</Link>
      </li>
      <li>
        <Link href="/legal/software-license/">Software license</Link>
      </li>
    </Typo>

    <Typo variant="paragraph">Please read.</Typo>
  </>
);
