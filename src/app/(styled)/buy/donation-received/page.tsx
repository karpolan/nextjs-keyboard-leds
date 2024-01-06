import { APP_NAME } from '@/config';
import { Link, Typo, Wrapper } from '@/components';
import SocialMedia, { SOCIAL_MEDIA } from '@/components/SocialMedia/SocialMedia';
import ListOtherSoftware from '../../download/ListOtherSoftware';

const DonationReceivedPage = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header2">Thank you for your donation!</Typo>
      <Typo variant="paragraph">
        Your donation will help us to continue to provide free content and resources to the community. Your donation has
        been received and we really appreciate you. Thank you for supporting the <strong>{APP_NAME}</strong> team!
      </Typo>

      <Typo variant="header2">Social media</Typo>
      <Typo variant="paragraph">
        Feel free to contact our team using different social media.{' '}
        <Link href={SOCIAL_MEDIA.facebook.href}>Facebook</Link> and{' '}
        <Link href={SOCIAL_MEDIA.twitter.href}>Twitter</Link> are preferred, but you can use any social network you
        like:
      </Typo>
      <SocialMedia variant="full" />

      <Typo variant="header2">Software created by our Team Members</Typo>
      <Typo variant="paragraph">
        Take a look at other software created by our team, maybe you&apos;ll find something interesting for you:
      </Typo>
      <ListOtherSoftware />
    </Wrapper>
  );
};

export default DonationReceivedPage;
