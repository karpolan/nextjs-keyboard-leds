import { Metadata, NextPage } from 'next';
import { APP_NAME, IS_DEBUG } from '@/config';
import { capitalize } from '@/utils';
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
 * Generates MetaData for the page based on the route params.
 */
export async function generateMetadata(
  { params: { slug } }: Props
  // parent: ResolvingMetadata
): Promise<Metadata> {
  const event = slug ? slug.map((x) => capitalize(x)).join(' - ') : 'Default';
  const title = `${event} - PingNotify - ${APP_NAME}`;
  return { title };
}

/**
 * Returns list of all PingNotify verbs to generate static pages.
 * @returns {{ slug: string[] }[]} List of all verbs.
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
  const result = PING_NOTIFY_VERBS.map((verb) => ({ slug: [verb] }));
  IS_DEBUG && console.log('ping.generateStaticParams()', JSON.stringify(result));
  return result;
}

export default PingNotifyEventPage;
