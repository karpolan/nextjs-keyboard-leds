import { Metadata, NextPage } from 'next';
import { notFound } from 'next/navigation';
import { ContentFile, contentFileToUrl, getContentFiles } from './utils';
import { APP_NAME, IS_DEBUG } from '@/config';
import { Typo, Wrapper } from '@/components';
import { CategoryGroup, TagGroup } from '@/components/Taxonomy';

interface Props {
  params: {
    slug: string[];
  };
}

type PageData = Partial<ContentFile>;

/**
 * Loads page data from xxx.tsx file based on current slug
 */
function getPageData(slug: string[]): PageData {
  let pageData: Partial<PageData>;
  const normalizedSlug = slug.map((x) => x.toLowerCase());
  const fileName = slug.map((x) => x.toLowerCase()).join('-');
  const href = `/${normalizedSlug.join('/')}`;

  try {
    pageData = require(`@/app/(main)/[...slug]/${fileName}.tsx`);
  } catch (error) {
    pageData = {};
  }

  return {
    href,
    ...pageData,
  };
}

/**
 * Renders "News" page content based on current slug
 * @page NewsPage
 */
const NewsPage: NextPage<Props> = ({ params: { slug } }) => {
  const { categories, tags, content, title } = getPageData(slug);
  if (!content) {
    return notFound();
  }

  return (
    <Wrapper tag="article">
      {title && <Typo variant="header1">{title}</Typo>}
      {content}
      {categories && categories?.length > 0 && <CategoryGroup categories={categories} />}
      {tags && tags?.length > 0 && <TagGroup tags={tags} />}
    </Wrapper>
  );
};

/**
 * Returns list of all news/articles to generate static pages.
 * @returns {Promise<{ slug: string[] }[]>} List of all news/articles.
 */
export async function generateStaticParams() {
  const files = await getContentFiles();
  const result = files.map((fileName) => {
    const slugAsArray = contentFileToUrl(fileName).split('/').filter(Boolean);
    // IS_DEBUG && console.log(fileName, '=', slugAsArray);
    return {
      slug: slugAsArray,
    };
  });

  IS_DEBUG && console.log('news.generateStaticParams()', JSON.stringify(result));
  return result;
}

/**
 * Generates MetaData for the page based on the route params.
 */
export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const { categories = [], tags = [], title } = getPageData(slug);
  const titleToRender = `${title} - ${APP_NAME}`;
  const tagsAndCategories = [...categories, ...tags];
  const keywords = Array.from(new Set(tagsAndCategories)).join(', ');
  return { keywords, title: titleToRender };
}

export default NewsPage;
