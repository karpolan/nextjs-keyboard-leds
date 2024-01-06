import { Link, Typo, Wrapper } from '@/components';

/**
 * List of legal documents of the site
 * @page Legal
 */
const LegalPage = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header1">Legal Documents</Typo>
      <Typo variant="list">
        <li>
          <Link href="/legal/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/legal/software-license">Software License</Link>
        </li>
        <li>
          <Link href="/legal/terms-conditions">Terms and Conditions</Link>
        </li>
      </Typo>
    </Wrapper>
  );
};

export default LegalPage;
