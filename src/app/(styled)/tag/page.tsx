import { Button, Stack, Typo, Wrapper } from '@/components';
import { getContentFiles } from '@/app/(styled)/[...slug]/utils';

/**
 * Renders a page with a list of all tags.
 * @component AllTagsPage
 */
const AllTagsPage = async () => {
  const contentFiles = await getContentFiles();
  const allTags: string[] = contentFiles.reduce((all: string[], fileName: string) => {
    const { tags } = require(`@/app/(styled)/[...slug]/${fileName}`);
    return [...all, ...tags];
  }, []);
  const uniqueTags = Array.from(new Set(allTags)).sort();

  return (
    <Wrapper tag="section">
      <Typo variant="header1">All Tags</Typo>
      <Stack direction="row">
        {uniqueTags.map((tag) => (
          <Button key={tag} href={`/tag/${tag.replace(/ /g, '-')}`} variant="text">
            {tag}
          </Button>
        ))}
      </Stack>
    </Wrapper>
  );
};

export default AllTagsPage;
