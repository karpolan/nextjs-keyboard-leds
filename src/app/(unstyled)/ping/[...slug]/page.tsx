import { NextPage } from 'next';
import { IS_DEBUG } from '@/config';
import BlockPingNotifyInfo from '../BlockPingNotifyInfo';
import BlockPingNotifyDescription from '../BlockPingNotifyDescription';

interface Props {
  params: {
    slug: string[];
  };
}

/**
 * Content of "PingNotify" page for specific event
 * @page PingNotifyEventPage
 */
const PingNotifyEventPage: NextPage<Props> = ({ params: { slug } }) => {
  return (
    <>
      <BlockPingNotifyInfo slug={slug} />
      <BlockPingNotifyDescription />
    </>
  );
};

/**
 * Returns list of all PingNotify verbs to generate static pages.
 * @returns {{ params: { slug: string[] } }[]} List of all verbs.
 */
export function generateStaticParams() {
  const PING_NOTIFY_VERBS = [
    'download',
    'install',
    'uninstall',
    'event',
    'start',
    'stop',
    'help',
    'update',
    'settings',
    'openlink',
    'running',
  ];
  const result = PING_NOTIFY_VERBS.map((verb) => ({ params: { slug: [verb] } }));
  IS_DEBUG && console.log('ping.generateStaticParams()', JSON.stringify(result));
  return result;
}

export default PingNotifyEventPage;
