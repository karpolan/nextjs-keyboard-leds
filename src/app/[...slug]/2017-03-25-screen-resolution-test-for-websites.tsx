import { Link, Typo } from '@/components';

export const categories = ['free', 'website'];
export const tags = ['feature', 'feedback', 'free', 'internet', 'osd', 'screen', 'website'];
export const content = (
  <>
    <Typo variant="header1">Screen Resolution Test for Websites</Typo>
    <Typo variant="paragraph">
      Testing of the website at different screen resolutions is very important for every site owner.
    </Typo>
    <Typo variant="paragraph">
      There are lots of devices (desktops, notebooks, mobile phones, tablets, TVs, smart watches) with different screen
      sizes (HD ready, Full HD, 4K) and orientations (portrait, landscape) on the market.
    </Typo>
    <Typo variant="paragraph">
      Take a look at free site resolution tester created by our team member:{' '}
      <Link href="https://karpolan.com/services/site-viewer/">Free Website Tester for Different Resolutions</Link>
    </Typo>
    <Typo variant="paragraph">
      Check usability of every your website at different screen resolutions, make sure that your websites are adaptive
      and responsive.
    </Typo>
  </>
);
