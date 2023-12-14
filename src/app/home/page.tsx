import { Stack, Wrapper } from '@/components';

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
    </Wrapper>
  );
};

export default HomePage;
