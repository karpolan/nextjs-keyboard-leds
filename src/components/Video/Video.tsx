'use client';
import { FunctionComponent } from 'react';
import { useOnMobile } from '@/hooks';

const VIDEOS = {
  tray: 'https://www.youtube.com/embed/Po7hH4AbWXA?si=IDtS1hy9RvVpOJeE',
  demo: 'https://www.youtube.com/embed/A0gyDQaazf4?si=5AU6RXwh__sgmzM7',
};

const SIZES = {
  '4x3': {
    multiplier: 4 / 3,
    divider: 3 / 4,
  },
  '16x9': {
    multiplier: 16 / 9,
    divider: 9 / 16,
  },
};

interface Props {
  video?: keyof typeof VIDEOS;
  size?: keyof typeof SIZES;
}

/**
 * Renders iframe with Demo Video, size of iframe depends on screen size
 * @component Video
 */
const Video: FunctionComponent<Props> = ({ size = '16x9', video = 'demo' }) => {
  const onMobile = useOnMobile();
  const onNarrowScreen = useOnMobile(1024);

  const src = VIDEOS[video];
  const width = onMobile ? 320 : onNarrowScreen ? 560 : 720;
  const height = width * SIZES[size].divider;

  return (
    <>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
        frameBorder={0}
        height={height}
        loading="lazy"
        src={src}
        title="YouTube video player"
        width={width}
      />
    </>
  );
};

export default Video;
