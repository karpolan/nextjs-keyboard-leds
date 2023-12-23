'use client';
import { Button, Link, Stack, Typo, Wrapper } from '@/components';
import Logo from '../Logo';
import { useOnMobile } from '@/hooks';
import styles from './Footer.module.css';

const Footer = () => {
  const onMobile = useOnMobile();
  const direction = onMobile ? 'column' : 'row';

  return (
    <footer className={styles.footer} id="footer">
      <Stack direction={direction} alignItems="center" justifyContent="space-around">
        <Stack>
          <Stack direction="row" gap="0.5rem" alignItems="center">
            <Logo size="small" noText />
            <Typo variant="text">
              Keyboard LEDs is free software for Windows. Created just for fun&trade; by{' '}
              <Link href="https://karpolan.com">KARPOLAN</Link> in 2010.
            </Typo>
          </Stack>
          <div>
            <Button variant="icon" icon="facebook" href="https://www.facebook.com/KeyLeds" />
            <Button variant="icon" icon="twitter" href="https://twitter.com/KeyLeds" />
          </div>
        </Stack>
        <Stack direction="row" gap="1rem">
          <Stack>
            <Link href="/">Home</Link>
            <Link href="/screenshots">Screenshots</Link>
            <Link href="/download">Download</Link>
            <Link href="/buy">Buy</Link>
          </Stack>
          <Stack>
            <Link href="/legal/privacy-policy">Privacy Policy</Link>
            <Link href="/legal/terms">Terms of Use</Link>
            <Link href="/history">History</Link>
            <Link href="/contact">Contact Us</Link>
          </Stack>
        </Stack>
      </Stack>
      {!onMobile && (
        <Stack alignItems="center" direction="row" justifyContent="space-between">
          <Stack direction="row" gap="1rem">
            <Link href="/legal/privacy-policy">Privacy Policy</Link>
            <Link href="/legal/terms">Terms of Use</Link>
          </Stack>
          <div>
            Copyright &copy; 2010-{new Date().getFullYear()} <Link href="https://karpolan.com">KARPOLAN</Link>
          </div>
        </Stack>
      )}
    </footer>
  );
};

export default Footer;
