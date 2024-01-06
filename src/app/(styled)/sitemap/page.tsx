import { Link, Typo, Wrapper } from '@/components';

/**
 * Content of the Sitemap page.
 * @page Sitemap
 */
const SitemapPage = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header1">Sitemap</Typo>
      <Typo variant="list">
        <li>
          <Link href="/popular-articles/">Articles</Link>
          <Typo variant="list">
            <li>
              <Link href="/popular-articles/caps-lock-indicator/">Caps Lock Indicator</Link>
            </li>
            <li>
              <Link href="/popular-articles/keyboard-indicator/">Keyboard Indicator</Link>
            </li>
            <li>
              <Link href="/popular-articles/num-lock-indicator/">Num Lock Indicator</Link>
            </li>
            <li>
              <Link href="/popular-articles/scroll-lock-indicator/">Scroll Lock Indicator</Link>
            </li>
          </Typo>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/legal/">Legal</Link>
          <Typo variant="list">
            <li>
              <Link href="/legal/terms-conditions/">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/legal/privacy-policy/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/legal/software-license/">Software License</Link>
            </li>
          </Typo>
        </li>
        <li>
          <Link href="/sitemap/">Sitemap</Link>
        </li>
        <li>
          <Link href="/screenshots/">Screenshots</Link>
        </li>
        <li>
          <Link href="/download/">Download</Link>
          <Typo variant="list">
            <li>
              <Link href="/download/install/">Install</Link>
            </li>
            <li>
              <Link href="/download/uninstall/">Uninstall</Link>
            </li>
          </Typo>
        </li>
        <li>
          <Link href="/buy/">Buy</Link>
          <Typo variant="list">
            <li>
              <Link href="/buy/donation-received/">Donation Received</Link>
            </li>
          </Typo>
        </li>
        <li>
          <Link href="/news/">News</Link>
        </li>
        <li>
          <Link href="/contact/">Contact</Link>
        </li>
        <li>
          <Link href="/articles/">Articles</Link>
        </li>
        <li>
          <Link href="/software/">Software</Link>
        </li>
        <li>
          <Link href="/ping/">PingNotify&trade;</Link>
        </li>
      </Typo>
    </Wrapper>
  );
};

export default SitemapPage;
