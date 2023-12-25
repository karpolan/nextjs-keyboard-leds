import { Stack, Typo, Wrapper } from '@/components';
import DownloadButton from '@/components/DownloadButton';
import DemoVideo from '@/components/DemoVideo';
import Screenshot from '@/components/Screenshot';
import SocialMedia from '@/components/SocialMedia';

export const metadata = {
  alternates: {
    canonical: 'https://keyboard-leds.com', // TODO: Make CANONICAL_ROOT configurable in .env
  },
};

/**
 * Home page content
 * @page Home
 */
const HomePage = () => {
  return (
    <Wrapper tag="article">
      <Stack padding="2rem 0">
        <Typo variant="header2">Where is indicator for Caps Lock?</Typo>
        <Typo variant="paragraph">
          Many models of modern notebooks, netbooks and cordless keyboards have no indicators for Caps Lock, and Num
          Lock. Indicator of Scroll lock disappeared almost from any hardware. <strong>Keyboard LEDs</strong> software
          solves this problem and allows you to see the current state of keyboard locks on small icon in the system tray
          or on the floating window over your screen.
        </Typo>
        <Stack alignItems="center" padding="1rem 0">
          <Screenshot />
        </Stack>
        <Typo variant="paragraph">
          Also the program allows the user to switch any keyboard lock on computers without hardware buttons: embedded
          devices, Apple keyboards and notebooks, etc.
        </Typo>
        <Typo variant="paragraph">
          You can download and use <strong>Keyboard LEDs</strong> software absolutely free, either for personal or
          business purposes:
        </Typo>
        <Stack alignItems="center">
          <DownloadButton />
        </Stack>
        <Typo variant="paragraph">
          If you'll found this program interesting and helpful please inform all your friends about it 🙂
        </Typo>
      </Stack>

      <Stack padding="2rem 0">
        <Typo variant="header2">Caps Lock and Num Lock indicators right on your desktop</Typo>
        <Typo variant="paragraph">
          Here is a small video that demonstrates how to get indicators of caps, num, and scroll locks right on the
          screen:
        </Typo>
        <Stack alignItems="center" padding="1rem 0">
          <DemoVideo />
        </Stack>
        <Typo variant="paragraph">You can also follow us on different social media:</Typo>
        <SocialMedia />
      </Stack>
    </Wrapper>
  );
};

export default HomePage;
