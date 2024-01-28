import Image from 'next/image';
import { APP_NAME, PUBLIC_URL } from '@/config';
import { Stack, Typo, Wrapper } from '@/components';
import Screenshot from '@/components/Screenshot';
import Video from '@/components/Video';

export const metadata = {
  alternates: {
    canonical: `${PUBLIC_URL}/screenshots/`,
  },
};

/**
 * Screenshots page content
 * @page Screenshots
 */
const ScreenshotsPage = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header2">Screenshots</Typo>
      <Typo variant="paragraph">Main window with settings, tray icon, floating indicator:</Typo>
      <Stack alignItems="center" padding="1rem 0">
        <Screenshot />
      </Stack>

      <Typo variant="header2">Program icon</Typo>
      <Stack alignItems="center" padding="1rem 0">
        <Image alt={`${APP_NAME} icon 256 pixels`} src="/images/icon-256x256.png" width={256} height={256} />
        <Stack alignItems="center" direction="row" gap="1rem" justifyContent="center">
          <Image alt={`${APP_NAME} icon 96 pixels`} src="/images/icon-96x96.png" width={96} height={96} />
          <Image alt={`${APP_NAME} icon 48 pixels`} src="/images/icon-48x48.gif" width={48} height={48} />
          <Image alt={`${APP_NAME} icon 32 pixels`} src="/images/icon-32x32.gif" width={32} height={32} />
          <Image alt={`${APP_NAME} icon 24 pixels`} src="/images/icon-24x24.gif" width={24} height={24} />
          <Image alt={`${APP_NAME} icon 16 pixels`} src="/images/icon-16x16.gif" width={16} height={16} />
        </Stack>
      </Stack>

      <Typo variant="header2">Demo Video</Typo>
      <Stack alignItems="center" padding="1rem 0">
        <Video video="demo" />
      </Stack>
    </Wrapper>
  );
};

export default ScreenshotsPage;
