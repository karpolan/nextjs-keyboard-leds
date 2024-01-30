import { Metadata } from 'next';
import { APP_NAME } from '@/config';
import { Button, Stack, Typo, Wrapper } from '@/components';
import { categoryToUrl, getCategoryList } from './utils';

/**
 * Renders a page with a list of all categories
 * @component AllCategoriesPage
 */
const AllCategoriesPage = async () => {
  const categories = await getCategoryList();
  return (
    <Wrapper tag="section">
      <Typo variant="header1">All Categories</Typo>
      <Stack direction="row">
        {categories.map((category) => (
          <Button key={category} href={categoryToUrl(category)} variant="text">
            {category}
          </Button>
        ))}
      </Stack>
    </Wrapper>
  );
};

/**
 * Generates MetaData for the page based on the route params.
 */
export async function generateMetadata(): Promise<Metadata> {
  const categories = await getCategoryList();
  const title = `Categories - ${APP_NAME}`;
  const keywords = categories.join(', ');
  return { keywords, title };
}

export default AllCategoriesPage;
