import { Link, Typo, Wrapper } from '@/components';
import { APP_NAME, PUBLIC_URL } from '@/config';
import { softwareToUrl, getSoftwareList, softwareToTitle } from './utils';
import styles from './software.module.css';

/**
 * Renders a page with a list of all Software
 * @component AllSoftwarePage
 */
const AllSoftwarePage = async () => {
  const list = await getSoftwareList();
  return (
    <Wrapper tag="section">
      <Typo variant="header1">{APP_NAME} Alternative Software</Typo>
      <Typo variant="paragraph">
        Numerous software products similar to <strong>{APP_NAME}</strong> are available in the market, ranging from free
        programs to commercial utilities. The KEYBOARD-LEDS.COM website provides comprehensive information about these
        alternative software options.
      </Typo>
      <Typo variant="paragraph">
        Explore the following list of well-known alternatives to the <strong>{APP_NAME}</strong> product:
      </Typo>
      <Typo variant="list" className={styles.list}>
        {list.map((name) => (
          // TODO: Make component for list item
          <li key={name}>
            <Link href={softwareToUrl(name)}>{softwareToTitle(name)}</Link>
          </li>
        ))}
      </Typo>
      <Typo variant="paragraph">
        Additionally, consider exploring the <strong>{APP_NAME}</strong> program - an authentic alternative to numerous
        shareware and freeware solutions. You can <Link href="/download/">download {APP_NAME}</Link> directly from the
        KEYBOARD-LEDS.COM website.
      </Typo>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Software relative to Caps Lock, Num Lock, and Scroll Lock - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/software/`,
  },
};

export default AllSoftwarePage;
