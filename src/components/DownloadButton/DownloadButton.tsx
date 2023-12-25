'use client';
import Button from '../Button';
import { gaPageView } from '../../lib/ga';

const URL_DOWNLOAD = '/files/keyboard-leds.exe';

/**
 * Renders "Download" button
 * @component DownloadButton
 */
const DownloadButton = () => {
  return (
    <Button
      href={URL_DOWNLOAD}
      title="Download Keyboard LEDs software installation package"
      onClick={() => gaPageView(URL_DOWNLOAD)}
    >
      Download
    </Button>
  );
};

export default DownloadButton;
