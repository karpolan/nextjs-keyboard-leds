import { Button, Stack, Typo, Wrapper } from '@/components';
import { getContentFiles } from '@/app/(styled)/[...slug]/utils';

/**
 * Renders a page with a list of all categories
 * @component AllCategoriesPage
 */
const AllCategoriesPage = async () => {
  const contentFiles = await getContentFiles();
  const allCategories: string[] = contentFiles.reduce((all: string[], fileName: string) => {
    const { categories } = require(`@/app/(styled)/[...slug]/${fileName}`);
    return [...all, ...categories];
  }, []);
  const uniqueCategories = Array.from(new Set(allCategories)).sort();

  return (
    <Wrapper tag="section">
      <Typo variant="header1">All Categories</Typo>
      <Stack direction="row">
        {uniqueCategories.map((category) => (
          <Button key={category} href={`/category/${category.replace(/ /g, '-')}`} variant="text">
            {category}
          </Button>
        ))}
      </Stack>
    </Wrapper>
  );
};

export default AllCategoriesPage;
