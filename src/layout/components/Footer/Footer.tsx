'use client';
import { useMemo } from 'react';
import { Link } from '@/components';
import { APP_NAME } from '@/config';
import { useOnMobile } from '@/hooks';
import SocialMedia from '@/components/SocialMedia';
import Logo from '../Logo';
import styles from './Footer.module.css';

/**
 * Renders "Footer" composition.
 * @component Footer
 */
const Footer = () => {
  const onSmallScreen = useOnMobile(320);
  const onMobile = useOnMobile();
  const onNarrowScreen = useOnMobile(1024);
  const logoTextHidden = onSmallScreen || (!onMobile && onNarrowScreen);

  const className = useMemo(
    () => [styles.footer, onMobile ? styles.mobile : styles.desktop].filter(Boolean).join(' '),
    [onMobile]
  );

  return (
    <footer className={className} id="footer">
      <div className={styles.logo}>
        <Logo size="small" noText={logoTextHidden} />
        {onMobile && (
          <span className={styles.text}>
            {APP_NAME} is free software for Windows.
            <br />
            Created just for fun&trade; by <Link href="https://karpolan.com">KARPOLAN</Link> in 2010.
          </span>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/screenshots/">Screenshots</Link>
          <Link href="/download/">Download</Link>
          <Link href="/buy/">Buy</Link>
          <Link href="/news/">News</Link>
          <Link href="/contact/">Contacts</Link>
        </div>
        <div className={styles.menu}>
          <Link href="/legal/privacy-policy/">Privacy Policy</Link>
          <Link href="/legal/terms-conditions/">Terms of Use</Link>
          <Link href="/article/">Articles</Link>
          <Link href="/software/">Software</Link>
          <Link href="/category/">Categories</Link>
          <Link href="/tag/">Tags</Link>
        </div>
        {!onMobile && (
          <div className={styles.copyright}>
            <div>
              Copyright &copy; 2010-{new Date().getFullYear()} <Link href="https://karpolan.com">KARPOLAN</Link>
            </div>
          </div>
        )}
      </div>
      <div className={styles.social}>
        <SocialMedia variant="footer" />
      </div>
    </footer>
  );
};

export default Footer;
