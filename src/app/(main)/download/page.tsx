import { APP_NAME, APP_VERSION, PUBLIC_URL } from '@/config';
import { Link, Stack, Typo, Wrapper } from '@/components';
import Video from '@/components/Video';
import BlockDownloadButtons from './BlockDownloadButtons';
import ListOtherSoftware from './ListOtherSoftware';

/**
 * Content of Download page
 * @page Download
 */
const PageDownload = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header2">Download Software</Typo>
      <Typo variant="paragraph">
        <strong>{APP_NAME}</strong> version {APP_VERSION} shows indicator of Caps, Num and Scroll locks right on your
        screen. Program works on any desktop and server version of Windows either 32 or 64 bits. Software is tested and
        compatible with Windows XP/Vista/7/8/10/11. Should work on Win 9x/NT4/2000 except some features. There is no Mac
        version, yet 🙂
      </Typo>
      <Typo variant="paragraph">
        Software is distributed as Freeware. You can download and use our software absolutely free. It is created just
        for fun&trade; by <Link href="https://karpolan.com">KARPOLAN</Link>.
      </Typo>
      <BlockDownloadButtons />
      <Typo variant="paragraph">
        Simply run the downloaded file and follow the instructions of the installation wizard. You will be able to start{' '}
        <strong>{APP_NAME}</strong> using the Programs menu (Start button) or by clicking the program icon on your
        desktop. Actually, you will not have to do that, because the program automatically runs after the installation
        and on the system start.
      </Typo>

      <Typo variant="header2">How to Make Tray Icon Visible</Typo>
      <Typo variant="paragraph">
        If you are using Windows Vista/7/8/10/11 and don&apos;t see the icon in the system tray (near the clock) please
        watch this video:
      </Typo>
      <Stack alignItems="center" padding="1rem 0 2rem 0">
        <Video video="tray" size="4x3" />
      </Stack>

      <Typo variant="header2">Other useful Software</Typo>
      <Typo variant="paragraph">
        Take a look at other software created by <Link href="https://karpolan.com">KARPOLAN</Link> and his friends,
        maybe you&apos;ll find something interesting for you:
      </Typo>
      <ListOtherSoftware />
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Download free Caps Lock and Num Lock software - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/download/`,
  },
};

export default PageDownload;
