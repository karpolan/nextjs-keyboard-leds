import { Link, Typo, Wrapper } from '@/components';

/**
 * Content of "News" page, it was a Blog before
 * @page News
 */
const NewsPage = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header1">News</Typo>
      <Typo variant="list">
        <li>
          <Link href="/2024/01/05/new-website/">2024-01-05 - New Website</Link>
        </li>
        <li>
          <Link href="/2017/06/06/how-to-make-tray-icon-always-visible/">
            2017-06-06 - How to make tray icon always visible?
          </Link>
        </li>
        <li>
          <Link href="/2017/05/09/network-inventory-software/">2017-05-09 - Network Inventory Software</Link>
        </li>
        <li>
          <Link href="/2017/03/25/screen-resolution-test-for-websites/">
            2017-03-25 - Screen Resolution Test for Websites
          </Link>
        </li>
        <li>
          <Link href="/2016/12/06/what-new-feature-do-you-want/">2016-12-06 - What new feature do you want?</Link>
        </li>
        <li>
          <Link href="/2014/10/06/new-computer-user-monitoring-service/">
            2014-10-06 - New computer user monitoring service
          </Link>
        </li>
        <li>
          <Link href="/2014/09/26/email-marketing-company/">
            2014-09-26 - A feedback from an email marketing company
          </Link>
        </li>
        <li>
          <Link href="/2012/09/13/f-lock-indicator/">2021-09-13 - F-Lock Keyboard Indicator</Link>
        </li>
        <li>
          <Link href="/2012/07/10/keyboard-leds-2-7/">2012-06-10 - Keyboard LEDs 2.7</Link>
        </li>
        <li>
          <Link href="/2012/02/03/keyboard-leds-2-5/">2012-02-03 - Keyboard LEDs 2.5</Link>
        </li>
        <li>
          <Link href="/2012/01/21/video-demo/">2012-01-21 - Video demo</Link>
        </li>
        <li>
          <Link href="/2011/12/19/keyboard-leds-2-3/">2011-12-19 - Keyboard LEDs 2.3</Link>
        </li>
        <li>
          <Link href="/2011/11/25/keyboard-leds-2-1/">2011-11-25 - Keyboard LEDs 2.1</Link>
        </li>
        <li>
          <Link href="/2011/10/01/false-antivirus-alert/">2011-10-01 - False antivirus alert</Link>
        </li>
        <li>
          <Link href="/2011/10/01/legal-documents-added/">2011-10-01 - Legal documents added</Link>
        </li>
        <li>
          <Link href="/2011/09/23/keyboard-leds-2-0/">2011-09-23 - Keyboard LEDs 2.0</Link>
        </li>
        <li>
          <Link href="/2011/08/27/keyboard-leds-1-5/">2011-08-27 - Keyboard LEDs 1.5</Link>
        </li>
        <li>
          <Link href="/2011/08/27/gravatars-are-cool/">2011-08-27 - Gravatars are Cool!</Link>
        </li>
        <li>
          <Link href="/2011/08/27/website-started/">2011-08-27 - Website started!</Link>
        </li>
      </Typo>
    </Wrapper>
  );
};

export default NewsPage;
