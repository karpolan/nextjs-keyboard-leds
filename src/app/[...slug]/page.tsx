import { NextPage } from 'next';
import { notFound } from 'next/navigation';
import { Wrapper } from '@/components';
import { CategoryGroup, TagGroup } from '@/components/Taxonomy';

// export { generateStaticParams } from './utils'; // Static generation

interface Props {
  params: {
    slug: string[];
  };
}

const SmartPage: NextPage<Props> = ({ params: { slug } }) => {
  let pageData;
  const combinedSlug = slug.map((x) => x.toLowerCase()).join('-');
  try {
    pageData = require(`@/app/[...slug]/${combinedSlug}.tsx`);
  } catch (error) {
    // return notFound();
  }

  const { categories, tags, content } = pageData ?? {};
  if (!content) {
    return notFound();
  }

  return (
    <Wrapper tag="article">
      {content}
      {categories?.length > 0 && <CategoryGroup categories={categories} />}
      {tags?.length > 0 && <TagGroup tags={tags} />}
    </Wrapper>
  );
};

export default SmartPage;
