import { APP_NAME, APP_VERSION } from '@/config';
import { Button, Link, Stack, Typo, Wrapper } from '@/components';
import DownloadButton from '@/components/DownloadButton';
import Video from '@/components/Video';
import BlockDownloadButtons from './BlockDownloadButtons';

/**
 * Content of Download page
 * @page Download
 */
const PageDownload = () => {
  return (
    <Wrapper tag="article">
      <Stack padding="2rem 0">
        <Typo variant="header2">Download Free Software</Typo>
        <Typo variant="paragraph">
          <strong>{APP_NAME}</strong> version {APP_VERSION} shows indicator of Caps, Num and Scroll locks right on your
          screen. Program works on any desktop and server version of Windows either 32 or 64 bits. Software is tested
          and compatible with Windows XP/Vista/7/8/10/11. Should work on Win 9x/NT4/2000 except some features. There is
          no Mac version, yet 🙂
        </Typo>
        <Typo variant="paragraph">
          Software is distributed as Freeware. You can download and use our software absolutely free. It is created just
          for fun&trade; by <Link href="https://karpolan.com">KARPOLAN</Link>.
        </Typo>
        <BlockDownloadButtons />
        <Typo variant="paragraph">
          Simply run the downloaded file and follow the instructions of the installation wizard. You will be able to
          start <strong>{APP_NAME}</strong> using the Programs menu (Start button) or by clicking the program icon on
          your desktop. Actually, you will not have to do that, because the program automatically runs after the
          installation and on the system start.
        </Typo>
      </Stack>

      <Stack padding="2rem 0">
        <Typo variant="header2">How to Make Tray Icon Visible</Typo>
        <Typo variant="paragraph">
          If you are using Windows Vista/7/8/10/11 and don't see the icon in the system tray (near the clock) please
          watch this video:
        </Typo>
        <Stack alignItems="center">
          <Video video="tray" size="4x3" />
        </Stack>
      </Stack>

      <Stack padding="2rem 0">
        <Typo variant="header2">Other useful Software</Typo>
        <Typo variant="paragraph">
          Take a look at other software created by <Link href="https://karpolan.com">KARPOLAN</Link> and his friends,
          maybe you'll find something interesting for you:
        </Typo>
        <Typo variant="list">
          <li>
            <strong>
              <Link href="https://auto-mute.com">Auto Mute</Link>
            </strong>
          </li>
          <li>
            <strong>
              <Link href="https://touchpad-blocker.com">Touchpad Blocker</Link>
            </strong>
          </li>
          <li>
            <strong>
              <Link href="https://caps-lock-indicator.com">Caps Lock Indicator</Link>
            </strong>
          </li>
        </Typo>
      </Stack>
    </Wrapper>
  );
};

export default PageDownload;
