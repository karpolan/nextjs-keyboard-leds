import { Button, Icon, Stack, Typo, Wrapper } from '@/components';

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
    <Wrapper tag="article">
      <Stack>
        <Typo variant="header1">Heading 1</Typo>
        <Typo variant="header2" color="primary">
          Heading 2
        </Typo>
        <Typo tag="h5" variant="header3" color="teal" underline capitalize>
          Heading 3 - here all words all lowercase
        </Typo>
        <Typo tag="h6" variant="header3" color="magenta" bold>
          Heading 3 - here all words all lowercase
        </Typo>
        <Typo variant="text">Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typo>
        <Typo variant="text">Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typo>
        <Typo variant="paragraph">
          Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </Typo>
        <Typo variant="paragraph" color="secondary" align="justify">
          Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </Typo>
      </Stack>
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
