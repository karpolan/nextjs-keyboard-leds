'use client';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import { APP_NAME } from '@/config';
import { useOnMobile } from '@/hooks';
import Link from '../Link';

interface Props {
  variant?: 'main' | 'secondary';
}

function getSrcByVariant(variant: Props['variant']): string {
  switch (variant) {
    case 'secondary':
      return '/images/screenshot.png';
    default:
      return '/images/screenshot.png';
  }
}

/**
 * Renders specific screenshot, size of image depends on screen size
 * @component Screenshot
 */
const Screenshot: FunctionComponent<Props> = ({ variant = 'main' }) => {
  const onMobile = useOnMobile();
  const src = getSrcByVariant(variant);
  const width = onMobile ? 320 : 400;
  const height = onMobile ? 480 : 600;
  return (
    <Link href="/screenshots">
      <Image
        title={`Screenshot of ${APP_NAME} software`}
        src={src}
        alt={`Screenshot of ${APP_NAME}`}
        width={width}
        height={height}
      />
    </Link>
  );
};

export default Screenshot;
