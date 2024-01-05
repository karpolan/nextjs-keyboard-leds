import { Link, Stack, Typo } from '@/components';

export const categories = ['news', 'software'];
export const tags = ['memory', 'network', 'screen', 'software', 'windows'];
export const content = (
  <>
    <Typo variant="header1">Network Inventory Software</Typo>
    <Typo variant="paragraph">
      Simple network inventory with <strong>Network Asset Tracker Pro</strong>. Our software enables you to collect
      hardware and software inventory data from remote computers with variety of audit methods like agentless and
      agent-based methods.
    </Typo>
    <Stack alignItems="center" padding="1rem 0">
      <Link href="https://www.misutilities.com/network-asset-tracker-pro/index.html" title="Software Inventory">
        {/* eslint-disable @next/next/no-img-element */}
        <img alt="software inventory" src="https://www.misutilities.com/lo/img/NATPro_software_inventory_sm.jpg" />
      </Link>
    </Stack>
    <Typo variant="paragraph">
      Network Asset Tracker Pro helps to make network inventory easy and quick. You can track changes in inventory data
      using history of scans.
    </Typo>
    <Typo variant="header2">Hardware Inventory</Typo>
    <Typo variant="paragraph">
      Using Network Asset Tracker Pro you will have up-to-date hardware information about each workstation on your
      network.
    </Typo>
    <Typo variant="paragraph">
      Processor type and frequency; BIOS information and serial number; Motherboard and chassis; Network adapters;
      Memory size and memory modules; Hard drive, CD/DVD drive; Video card and monitor; Multimedia devices; Printers;
      Manufacturer; Serial number, etc.
    </Typo>
    <Typo variant="header2">Software License Auditing and Software Inventory</Typo>
    <Typo variant="paragraph">
      License counting and <strong>Software Inventory</strong> for all remote computers shows version of{' '}
      <strong>software installed</strong> on every computer, publisher and registration key. Registration keys are
      available only for certain software packages.
    </Typo>
    <Typo variant="header2">Data Reporting</Typo>
    <Typo variant="paragraph">
      Just apply the necessary filtering to inventory data, and you can easily generate a report on any topic that
      interests you. You can export reports in HTML, MS Excel, CSV and RTF formats. By using chart builder you can
      create your own chart and then export it in HTML.
    </Typo>
    <Typo variant="paragraph">
      Network Asset Tracker Pro works as standard windows application, it&apos;s simple{' '}
      <Link href="https://www.misutilities.com" title="Network Inventory Software">
        network inventory software
      </Link>
      . There is no need to install any Web Servers or any other complicated systems.
    </Typo>
    <Typo variant="paragraph">
      The newest version of Network Asset Tracker Pro is available to download at:{' '}
      <Link href="https://www.misutilities.com/network-asset-tracker-pro/index.html" title="Network Inventory Software">
        www.misutilities.com
      </Link>
    </Typo>
  </>
);
