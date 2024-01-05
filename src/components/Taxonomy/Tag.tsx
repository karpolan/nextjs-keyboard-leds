import { FunctionComponent, HTMLAttributes } from 'react';
import { capitalize } from '@/utils';
import { Button } from '..';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  tag?: string;
}

/**
 * Renders single Tag link
 * @component Tag
 */
const Tag: FunctionComponent<Props> = ({ tag = 'default', ...restOfProps }) => {
  const words = tag.split(' ').map((word) => word.toLowerCase());
  const href = `/tag/${words.join('-')}`;
  const text = words.map((word) => capitalize(word)).join(' ');
  return (
    <Button href={href} variant="text" margin="0.125rem" {...restOfProps}>
      {text}
    </Button>
  );
};

export default Tag;
