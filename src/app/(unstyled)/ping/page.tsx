import BlockPingNotifyInfo from './BlockPingNotifyInfo';
import BlockPingNotifyDescription from './BlockPingNotifyDescription';

/**
 * Content of "PingNotify" page
 * @page PingNotifyRootPage
 */
const PingNotifyRootPage = () => {
  return (
    <>
      <BlockPingNotifyInfo />
      <BlockPingNotifyDescription />
    </>
  );
};

export default PingNotifyRootPage;
