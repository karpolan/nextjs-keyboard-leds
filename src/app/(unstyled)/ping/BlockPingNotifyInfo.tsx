import { FunctionComponent } from 'react';
import { APP_NAME } from '@/config';
import { capitalize } from '@/utils';
import { Link } from '@/components';

interface Props {
  slug?: string[];
}

/**
 * Render information about current "PingNotify" event
 * @component BlockPingNotifyInfo
 */
const BlockPingNotifyInfo: FunctionComponent<Props> = ({ slug }) => {
  const event = slug ? slug.map((x) => capitalize(x)).join(' - ') : 'Default';
  return (
    <div>
      <h1>
        {APP_NAME} - PingNotify - {event}
      </h1>
      <p>
        <Link href="/">{APP_NAME}</Link> opens this page to notify <Link href="/">KEYBOARD-LEDS.COM</Link> web server
        about &quot;{event}&quot; event. Collecting of some statistic data helps us to make {APP_NAME} better.
      </p>
      <p>
        There is no interesting information for humans here, sorry :) Visit <Link href="/">official website</Link> to
        read more about {APP_NAME} product.
      </p>
      <p>Thank you for your interest and understanding.</p>
    </div>
  );
};

export default BlockPingNotifyInfo;
