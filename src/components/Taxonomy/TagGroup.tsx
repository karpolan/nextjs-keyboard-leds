import { FunctionComponent, HTMLAttributes } from 'react';
import Typo from '../Typo';
import Tag from './Tag';
import styles from './Taxonomy.module.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  tags?: string[];
}

/**
 * Renders list of Tag links
 * @component TagsGroup
 */
const TagsGroup: FunctionComponent<Props> = ({ className, tags = [], ...restOfProps }) => {
  const classesToRender = [styles.group, className].filter(Boolean).join(' ');
  return (
    <div className={classesToRender} {...restOfProps}>
      <Typo bold>Tags:</Typo>
      <ul role="group">
        {tags.map((tag) => (
          <li key={tag}>
            <Tag tag={tag} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsGroup;
