import { Stack, Typo, Wrapper } from '@/components';
import DownloadButton from '@/components/DownloadButton';
import Video from '@/components/Video';
import Screenshot from '@/components/Screenshot';
import SocialMedia from '@/components/SocialMedia';
import { APP_NAME } from '@/config';
import { useMemo } from 'react';

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
  const appName = useMemo(() => <strong>{APP_NAME}</strong>, []);

  return (
    <Wrapper tag="article">
      <Typo variant="header1">Discover Your Caps Lock Indicator</Typo>
      <Typo variant="paragraph">
        In the era of sleek notebooks, netbooks, and wireless keyboards, the once-reliable indicators for Caps Lock, Num
        Lock, and Scroll Lock seem to have quietly disappeared from the hardware scene. Fret not, for {appName} software
        is here to reignite your awareness.
      </Typo>
      <Stack alignItems="center" padding="1rem 0">
        <Screenshot />
      </Stack>
      <Typo variant="paragraph">
        Our intuitive solution places a small icon in the system tray or a floating window on your screen, ensuring
        you&apos;re always in the know about the status of your keyboard locks.
      </Typo>
      <Typo variant="header3">Features:</Typo>
      <Typo variant="list">
        <li>
          <strong>Real-Time Monitoring:</strong> Instantly view the current state of Caps Lock, Num Lock, and Scroll
          Lock.
        </li>
        <li>
          <strong>Versatility:</strong> No hardware buttons? No problem. {appName} empowers users to toggle keyboard
          locks on devices without dedicated buttons, including embedded systems, Apple keyboards, and remotely
          connected PC.
        </li>
        <li>
          <strong>Look and Feel:</strong> Tailor the appearance of your indicators to suit your preferences. Personalize
          the color of the icon in the system tray for a seamless integration with your desktop theme. Customize the
          size and colors of the On-Screen Display (OSD) for a visually pleasing experience.
        </li>
      </Typo>
      <Stack alignItems="center" padding="1rem">
        <DownloadButton>Download Now - It&apos;s Free!</DownloadButton>
      </Stack>

      <Typo variant="header2">Caps Lock and Num Lock indicators right on your screen</Typo>
      <Typo variant="paragraph">
        Watch this brief video tutorial showcasing how to effortlessly bring Caps Lock, Num Lock, and Scroll Lock
        indicators directly onto your screen:
      </Typo>
      <Stack alignItems="center" padding="1rem 0">
        <Video video="demo" />
      </Stack>
      <Typo variant="header2">Share the Brilliance</Typo>
      <Typo variant="paragraph">
        If you find {appName} interesting and helpful, spread the word! Download and use our software for both personal
        and business purposes, and let your friends in on the secret. Together, let&apos;s make keyboard lock awareness
        a common delight.
      </Typo>
      <SocialMedia padding="0.5rem 0" />
      <Typo variant="paragraph">Thank you for choosing {appName} - where visibility meets simplicity</Typo>
    </Wrapper>
  );
};

export default HomePage;
