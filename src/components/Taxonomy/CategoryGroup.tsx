import { FunctionComponent, HTMLAttributes } from 'react';
import Typo from '../Typo';
import Category from './Category';
import styles from './Taxonomy.module.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  categories?: string[];
}

/**
 * Renders list of Category links
 * @component CategoryGroup
 */
const CategoryGroup: FunctionComponent<Props> = ({ className, categories = [], ...restOfProps }) => {
  const classesToRender = [styles.group, className].filter(Boolean).join(' ');
  return (
    <div className={classesToRender} {...restOfProps}>
      <Typo bold>Categories:</Typo>
      <ul role="group">
        {categories.map((tag) => (
          <li key={tag}>
            <Category tag={tag} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryGroup;
