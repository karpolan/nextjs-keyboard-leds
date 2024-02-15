import { FunctionComponent } from 'react';
import { Link, Typo } from '@/components';
import { SOFTWARE } from './config';
import { softwareToTitle, softwareToUrl } from './utils';
import styles from './software.module.css';

const DISTANCE_TO_NEXT = 9; // Number of Articles to skip to get to next link
const NUMBER_OF_LINKS = 6; // How many links on Article page

interface Props {
  skip?: number;
  software: string;
  total?: number;
}

/**
 * Renders a list of articles relative to the current article
 * @component BlockRelativeArticles
 * @param {string} article - Current article as a kebab-case-string.
 * @param {number} [skip=17] - How many articles to skip to get to the next link.
 * @param {number} [total=12] - How many links to render.
 */
const BlockRelativeSoftware: FunctionComponent<Props> = ({
  skip = DISTANCE_TO_NEXT,
  software,
  total = NUMBER_OF_LINKS,
}) => {
  const text = software.replace(/-/g, ' ');
  const start = SOFTWARE.indexOf(text) ?? 0;
  const list = [];
  for (let i = 1; i <= total; i++) {
    const index = (start + i * skip) % SOFTWARE.length;
    list.push(SOFTWARE[index]);
  }

  return (
    <Typo variant="list" className={styles.list}>
      {list.map((name) => (
        // TODO: Make component for list item
        <li key={name}>
          <Link href={softwareToUrl(name)}>{softwareToTitle(name)}</Link>
        </li>
      ))}
    </Typo>
  );
};

export default BlockRelativeSoftware;
