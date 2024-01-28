import { APP_NAME, PUBLIC_URL } from '@/config';
import { Link, Stack, Typo, Wrapper } from '@/components';
import SocialMedia from '@/components/SocialMedia';
import { SOCIAL_MEDIA } from '@/components/SocialMedia/SocialMedia';
import ListOtherSoftware from '../download/ListOtherSoftware';

export const metadata = {
  alternates: {
    canonical: `${PUBLIC_URL}/buy/`,
  },
};

/**
 * Content of "Buy" page
 * @page Buy
 */
const BuyPage = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header1">Don&apos;t buy, donate!</Typo>
      <Typo variant="paragraph">
        You don&apos;t need to make any purchases because <strong>{APP_NAME}</strong> software is entirely free!
        However, if you&apos;d like to support our team, you have the option to contribute through{' '}
        <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=AWYPPD263Q2N2">PayPal</Link>.
        We appreciate your generosity!
      </Typo>
      <Stack alignItems="center" padding="1rem">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="AWYPPD263Q2N2" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
            // border="0"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />
          {/* eslint-disable @next/next/no-img-element */}
          <img
            decoding="async"
            alt="PayPal tracking pixel"
            // border="0"
            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </Stack>

      <Typo variant="header2">Social media</Typo>
      <Typo variant="paragraph">
        Feel free to contact our team using different social media.{' '}
        <Link href={SOCIAL_MEDIA.facebook.href}>Facebook</Link> and{' '}
        <Link href={SOCIAL_MEDIA.twitter.href}>Twitter</Link> are preferred, but you can use any social network you
        like:
      </Typo>
      <SocialMedia variant="full" />

      <Typo variant="header2">Other useful Software</Typo>
      <Typo variant="paragraph">
        Take a look at other software created by our team, maybe you&apos;ll find something interesting for you:
      </Typo>
      <ListOtherSoftware />
    </Wrapper>
  );
};

export default BuyPage;
