import { FunctionComponent } from 'react';
import { capitalizeAllWords } from '@/utils';
import { Link, Typo } from '@/components';
import { ARTICLES } from './config';
import { articleToUrl } from './utils';
import styles from './article.module.css';

const DISTANCE_TO_NEXT = 17; // Number of Articles to skip to get to next link
const NUMBER_OF_LINKS = 12; // How many links on Article page

interface Props {
  article: string;
  total?: number;
  skip?: number;
}

/**
 * Renders a list of articles relative to the current article
 * @component BlockRelativeArticles
 * @param {string} article - Current article as a kebab-case-string.
 * @param {number} [skip=17] - How many articles to skip to get to the next link.
 * @param {number} [total=12] - How many links to render.
 */
const BlockRelativeArticles: FunctionComponent<Props> = ({
  article,
  skip = DISTANCE_TO_NEXT,
  total = NUMBER_OF_LINKS,
}) => {
  const text = article.replace(/-/g, ' ');
  const start = ARTICLES.indexOf(text) ?? 0;
  const articles = [];
  for (let i = 1; i <= total; i++) {
    const index = (start + i * skip) % ARTICLES.length;
    articles.push(ARTICLES[index]);
  }

  return (
    <Typo variant="list" className={styles.list}>
      {articles.map((article) => (
        <li key={article}>
          <Link href={articleToUrl(article)}>{capitalizeAllWords(article)}</Link>
        </li>
      ))}
    </Typo>
  );
};

export default BlockRelativeArticles;
