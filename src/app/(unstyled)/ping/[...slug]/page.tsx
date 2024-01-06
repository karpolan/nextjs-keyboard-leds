import { NextPage } from 'next';
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

export default PingNotifyEventPage;
