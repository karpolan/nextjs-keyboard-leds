import { APP_NAME } from '@/config';
import { Link, Stack, Typo, Wrapper } from '@/components';
import Video from '@/components/Video';
import SocialMedia, { SOCIAL_MEDIA } from '@/components/SocialMedia/SocialMedia';
import ListOtherSoftware from '@/app/download/ListOtherSoftware';

/**
 * Content of "Install" page
 * @page Install
 */
const InstallPage = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header1">Software Installed</Typo>
      <Typo variant="paragraph">
        Congratulations on installing the <strong>{APP_NAME}</strong> software on your computer. We appreciate your
        choice in selecting our software!
      </Typo>
      <Stack alignItems="center" padding="1rem 0">
        <Video video="tray" size="16x9" />
      </Stack>

      <Typo variant="header2">Social media</Typo>
      <Typo variant="paragraph">
        We highly encourage you to stay connected with us on social media for updates, exclusive offers, and the
        opportunity to access other valuable software at discounted rates or even for free. While{' '}
        <Link href={SOCIAL_MEDIA.facebook.href}>Facebook</Link> and{' '}
        <Link href={SOCIAL_MEDIA.twitter.href}>Twitter</Link>
        are our top choices, feel free to connect with us on any social network of your preference.
      </Typo>
      <SocialMedia variant="full" />

      <Typo variant="header2">Other useful Software</Typo>
      <Typo variant="paragraph">
        Take a look at other software created by <Link href="https://karpolan.com">KARPOLAN</Link> and his friends,
        maybe you&apos;ll find something interesting for you:
      </Typo>
      <ListOtherSoftware />
    </Wrapper>
  );
};

export default InstallPage;
