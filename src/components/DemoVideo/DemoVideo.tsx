'use client';
import { useOnMobile } from '@/hooks';

/**
 * Renders iframe with Demo Video, size of iframe depends on screen size
 * @component DemoVideo
 */
const DemoVideo = () => {
  const onMobile = useOnMobile();
  const onNarrowScreen = useOnMobile(1024);

  const width = onMobile ? 320 : onNarrowScreen ? 560 : 720;
  const height = onMobile ? 180 : onNarrowScreen ? 315 : 405;

  return (
    <iframe
      loading="lazy"
      width={width}
      height={height}
      src="https://www.youtube.com/embed/A0gyDQaazf4"
      frameBorder={0}
      allow="autoplay; encrypted-media"
      // allowFullScreen={false}
      allowFullScreen={true}
    />
  );
};

export default DemoVideo;
