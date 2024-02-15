import { Metadata, NextPage } from 'next';
import { APP_NAME, IS_DEBUG } from '@/config';
import { Link, Stack, Typo, Wrapper } from '@/components';
import { capitalizeAllWords } from '@/utils';
import Screenshot from '@/components/Screenshot';
import { getSoftwareList } from '../utils';
import BlockDownloadButtons from '../../download/BlockDownloadButtons';
import BlockRelativeSoftware from '../BlockRelativeSoftware';

interface Props {
  params: {
    software: string;
  };
}

/**
 * Renders "Single Software" page
 * @component SingleSoftwarePage
 */
const SingleSoftwarePage: NextPage<Props> = async ({ params: { software } }) => {
  const text = decodeURIComponent(software).replace(/-/g, ' ').replace(/   /g, ' - ');
  const title = capitalizeAllWords(text);

  // TODO: Make content dynamic based on the Software
  return (
    <Wrapper tag="article">
      <Typo variant="header1">{title}</Typo>
      <Typo variant="paragraph">
        {title} is well known software solution on the market. This program has many benefits beyond compare.
        {title} is installed on many PCs worldwide.
      </Typo>
      <Stack alignItems="center" padding="1rem 0 0 0">
        <Screenshot
          alt={`Screenshot of ${APP_NAME} that is similar to ${title} software`}
          title={`Alternate to ${title} software is ${APP_NAME}`}
        />
      </Stack>
      <BlockDownloadButtons />
      <Typo variant="paragraph">
        An excellent substitute for {title} software is the{APP_NAME} program. Various{' '}
        <Link href="/software/">alternative software to {title}</Link>, both free and commercial, can be found on the
        KEYBOARD-LEDS.COM website, along with a detailed comparison of these utilities and the {title} program.
      </Typo>

      <Typo variant="header2">Alternate software to {title}</Typo>
      <Typo variant="paragraph">
        This website provides an overview of numerous software alternatives to the {title} product, as well as other
        useful software.
      </Typo>
      <BlockRelativeSoftware software={software} />
      <Typo variant="paragraph">
        Additionally, consider exploring the {APP_NAME} software, an excellent alternative to replace the {title}{' '}
        utility. You can <Link href="/download/">download the free copy of {APP_NAME}</Link> directly from the
        KEYBOARD-LEDS.COM website.
      </Typo>
    </Wrapper>
  );
};

/**
 * Returns list of all mentioned categories to generate static pages.
 * @returns {Promise<{ software: string }[]>} List of all categories.
 */
export async function generateStaticParams() {
  const software = await getSoftwareList();
  const result = software.map((name) => ({ software: name.replace(/ /g, '-') }));
  IS_DEBUG && console.log('Software.generateStaticParams()', JSON.stringify(result));
  return result;
}

/**
 * Generates MetaData for the page based on params
 */
export async function generateMetadata(
  { params: { software } }: Props
  // parent: ResolvingMetadata
): Promise<Metadata> {
  const text = decodeURIComponent(software).replace(/-/g, ' ').replace(/   /g, ' - ');
  const title = `${capitalizeAllWords(text)} - Software - ${APP_NAME}`;
  return { title };
}

export default SingleSoftwarePage;
