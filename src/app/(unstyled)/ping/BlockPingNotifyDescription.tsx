import React from 'react';
import { Link } from '@/components';

/**
 * Renders description about PingNotify system
 * @component BlockPingNotifyDescription
 */
const BlockPingNotifyDescription = () => {
  return (
    <div>
      <h2>PingNotify&trade;</h2>
      <p>
        <Link href="https//karpolan.com/services/ping-notify/">PingNotify&trade;</Link> is a web based system to help
        software products communicate with webserver. The main benefit of this solution is ability to see software usage
        statistics right in{' '}
        <Link href="https//www.google.com/analytics/" rel="nofollow">
          Google Analytics
        </Link>{' '}
        control panel. The system can be used for:
      </p>
      <ul>
        <li>Notify about errors in software.</li>
        <li>Check for software updates.</li>
        <li>Track installs and uninstalls.</li>
        <li>Collect usage and events information.</li>
        <li>Create communication channels between software and web server</li>
      </ul>
      <p>
        PingNotify&trade; was initially created by <Link href="https://karpolan.com">KARPOLAN</Link> for own{' '}
        <Link href="https://software.karpolan.com">Created just for fun&trade;</Link> software products.
      </p>
    </div>
  );
};

export default BlockPingNotifyDescription;
