import { NextPage } from 'next';
import { notFound } from 'next/navigation';
import { IS_DEBUG } from '@/config';
import { Typo, Wrapper } from '@/components';
import { CategoryGroup, TagGroup } from '@/components/Taxonomy';
import { contentFileToUrl, getContentFiles } from './utils';

interface Props {
  params: {
    slug: string[];
  };
}

/**
 * Renders "News" page content based on current slug
 * @page NewsPage
 */
const NewsPage: NextPage<Props> = ({ params: { slug } }) => {
  let pageData;
  const combinedSlug = slug.map((x) => x.toLowerCase()).join('-');
  try {
    pageData = require(`@/app/(styled)/[...slug]/${combinedSlug}.tsx`);
  } catch (error) {
    // return notFound();
  }

  const { categories, tags, content, title } = pageData ?? {};
  if (!content) {
    return notFound();
  }

  return (
    <Wrapper tag="article">
      {title && <Typo variant="header1">{title}</Typo>}
      {content}
      {categories?.length > 0 && <CategoryGroup categories={categories} />}
      {tags?.length > 0 && <TagGroup tags={tags} />}
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

export default NewsPage;
