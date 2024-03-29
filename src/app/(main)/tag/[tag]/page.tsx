import { Metadata, NextPage } from 'next';
import { APP_NAME, IS_DEBUG } from '@/config';
import { capitalizeAllWords } from '@/utils';
import { Link, Typo, Wrapper } from '@/components';
import { CategoryGroup, TagGroup } from '@/components/Taxonomy';
import { ContentFile, contentFileToUrl, getContentFiles } from '@/app/(main)/[...slug]/utils';
import { getTagList } from '../utils';

interface Props {
  params: {
    tag: string;
  };
}

/**
 * Renders a page with a list of articles for a given tag.
 * @component SingleTagPage
 */
const SingleTagPage: NextPage<Props> = async ({ params: { tag } }) => {
  const textToFind = tag.replace(/-/g, ' ');
  const contentFiles = await getContentFiles();
  const articles: ContentFile[] = contentFiles.reduce((all: ContentFile[], fileName: string) => {
    const { tags, categories, content, title } = require(`@/app/(main)/[...slug]/${fileName}`);
    if (tags.includes(textToFind)) {
      const href = contentFileToUrl(fileName);
      all.push({ tags, categories, content, title, href });
    }
    return all;
  }, []);

  return (
    <Wrapper tag="section">
      <Typo variant="header1">Tag: &quot;{capitalizeAllWords(textToFind)}&quot;</Typo>
      {articles.map(({ content, categories = [], href = '/', tags = [], title }) => (
        <article key={title}>
          {title && (
            <Typo variant="header2">
              <Link href={href}>{title}</Link>
            </Typo>
          )}
          {content}
          {categories?.length > 0 && <CategoryGroup categories={categories} />}
          {tags?.length > 0 && <TagGroup tags={tags} />}
        </article>
      ))}
    </Wrapper>
  );
};

/**
 * Returns list of all mentioned tags to generate static pages.
 * @returns {Promise<{ tag: string }[]>} List of all tags.
 */
export async function generateStaticParams() {
  const tags = await getTagList();
  const result = tags.map((tag) => ({ tag: tag.replace(/ /g, '-') }));
  IS_DEBUG && console.log('tag.generateStaticParams()', JSON.stringify(result));
  return result;
}

/**
 * Generates MetaData for the page based on the route params.
 */
export async function generateMetadata({ params: { tag } }: Props): Promise<Metadata> {
  const normalizedTag = capitalizeAllWords(tag.replace(/-/g, ' '));
  const title = `${normalizedTag} - Tag - ${APP_NAME}`;
  return { title };
}

export default SingleTagPage;
