import { Link, Typo, Wrapper } from '@/components';
import { APP_NAME, PUBLIC_URL } from '@/config';
import { articleToTitle, articleToUrl, getArticleList } from './utils';
import styles from './article.module.css';

/**
 * Renders a page with a list of all Articles
 * @component AllArticlesPage
 */
const AllArticlesPage = async () => {
  const articles = await getArticleList();
  return (
    <Wrapper tag="section">
      <Typo variant="header1">Articles relative to {APP_NAME}</Typo>
      <Typo variant="paragraph">
        Explore the diverse collection of compelling articles and informative documents available on the website. New
        articles are regularly added to keep you updated. Discover the most popular articles related to the{' '}
        <strong>{APP_NAME}</strong> software below:
      </Typo>
      <Typo variant="list" className={styles.list}>
        {articles.map((name) => (
          // TODO: Make component for list item
          <li key={name}>
            <Link href={articleToUrl(name)}>{articleToTitle(name)}</Link>
          </li>
        ))}
      </Typo>
      <Typo variant="paragraph">
        We recommend exploring the <strong>{APP_NAME}</strong> product, which complements the content of these articles
        and documents. You can <Link href="/download/">download the latest version</Link> of <strong>{APP_NAME}</strong>{' '}
        from this website.
      </Typo>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Articles relative Caps Lock, Num Lock, and Scroll Lock - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/article/`,
  },
};

export default AllArticlesPage;
