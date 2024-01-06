import { APP_NAME } from '@/config';
import { Link, Stack, Typo, Wrapper } from '@/components';
import ContactForm from '@/components/ContactForm';
import SocialMedia, { SOCIAL_MEDIA } from '@/components/SocialMedia/SocialMedia';
import ListOtherSoftware from '../../download/ListOtherSoftware';

/**
 * Content of "Uninstall" page
 * @page Uninstall
 */
const UninstallPage = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header1">Software Uninstalled</Typo>
      <Typo variant="paragraph">
        You've successfully removed <strong>{APP_NAME}</strong> software from your computer.
      </Typo>
      <Typo variant="paragraph">
        Please <Link href="/contact">let us know the reason</Link> for our software removal. This information is very
        important for us, it might help us to make <strong>{APP_NAME}</strong> software better. Thank you!
      </Typo>
      <Stack alignItems="center" padding="1rem 0">
        <ContactForm />
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

export default UninstallPage;
