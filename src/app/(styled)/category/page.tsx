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

export default AllCategoriesPage;
