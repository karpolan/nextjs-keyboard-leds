import { Button, Stack, Typo, Wrapper } from '@/components';
import { getTagList, tagToUrl } from './utils';

/**
 * Renders a page with a list of all tags.
 * @component AllTagsPage
 */
const AllTagsPage = async () => {
  const tags = await getTagList();
  return (
    <Wrapper tag="section">
      <Typo variant="header1">All Tags</Typo>
      <Stack direction="row">
        {tags.map((tag) => (
          <Button key={tag} href={tagToUrl(tag)} variant="text">
            {tag}
          </Button>
        ))}
      </Stack>
    </Wrapper>
  );
};

export default AllTagsPage;
