import { FunctionComponent } from 'react';
import Button from '@/components/Button';
import Stack from '@/components/Stack';
import { ObjectPropByName } from '@/utils';

const SOCIAL_MEDIA: ObjectPropByName = {
  facebook: {
    href: 'https://www.facebook.com/KeyLeds',
    icon: 'facebook',
    title: 'Follow Keyboard LEDs on Facebook',
  },
  twitter: {
    href: 'https://twitter.com/KeyLeds',
    title: 'Follow Keyboard LEDs on Twitter',
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/karpolan/',
    title: 'Follow Author of Keyboard LEDs on LinkedIn',
  },
  instagram: {
    href: 'https://www.instagram.com/karpolan/',
    title: 'Follow Author of Keyboard LEDs on Instagram',
  },
  youtube: {
    href: 'https://www.youtube.com/user/karpolan',
    title: 'Follow Author of Keyboard LEDs on YouTube',
  },
};

interface Props {
  variant?: 'full' | 'footer';
}

/**
 * Renders list of social media links as icons
 * @component SocialMedia
 */
const SocialMedia: FunctionComponent<Props> = ({ variant = 'full' }) => {
  const iconsToRender = variant === 'footer' ? ['facebook', 'twitter', 'linkedin'] : Object.keys(SOCIAL_MEDIA);
  return (
    <Stack direction="row" justifyContent="center">
      {iconsToRender.map((key) => (
        <Button key={key} icon={key} href={SOCIAL_MEDIA[key].href} title={SOCIAL_MEDIA[key].title} variant="icon" />
      ))}
    </Stack>
  );
};

export default SocialMedia;
