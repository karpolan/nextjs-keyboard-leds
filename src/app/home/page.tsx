import { Button, Icon, Stack, Wrapper } from '@/components';

export const metadata = {
  alternates: {
    canonical: 'https://keyboard-leds.com', // TODO: Make CANONICAL_ROOT configurable in .env
  },
};

/**
 * Home page content
 * @page Home
 */
const HomePage = () => {
  return (
    <Wrapper>
      Heading
      <Stack gap="5rem">Some text</Stack>
      <hr />
      <Icon icon="aaa" />
      <Icon icon="aaa" size={32} title="Title" />
      <hr />
      <Button iconRight="check">
        Button
        <br />
        Line is too long
        <br />
        Line
        <br />
        Line
        <br />
      </Button>
      <hr />
      <Button variant="outlined" iconLeft="checkCurly">
        Outlined
      </Button>
      <hr />
      <Button variant="outlined">Outlined</Button>
      <hr />
      <Button variant="text">Text</Button>
      <hr />
      <Button iconLeft="close" variant="text" href="https://karpolan.com">
        Link
      </Button>
      <hr />
      <Button variant="text" href="https://karpolan.com">
        Link
      </Button>
      <hr />
      <Button variant="outlined" href="https://karpolan.com">
        Link in Button
      </Button>
      <hr />
    </Wrapper>
  );
};

export default HomePage;
