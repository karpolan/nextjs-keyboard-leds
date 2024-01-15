import { NextPage } from 'next';
import { APP_NAME, IS_DEBUG } from '@/config';
import { Link, Stack, Typo, Wrapper } from '@/components';
import { capitalizeAllWords } from '@/utils';
import Screenshot from '@/components/Screenshot';
import { getArticleList } from '../utils';
import BlockDownloadButtons from '../../download/BlockDownloadButtons';
import BlockRelativeArticles from '../BlockRelativeArticles';

export interface ArticleProps {
  params: {
    article: string;
  };
}

/**
 * Renders "Single Article" page
 * @component SingleArticlePage
 */
const SingleArticlePage: NextPage<ArticleProps> = async ({ params: { article } }) => {
  const text = article.replace(/-/g, ' ').replace(/   /g, ' - ');

  const title = capitalizeAllWords(text);

  // TODO: Make content dynamic based on the article
  return (
    <Wrapper tag="article">
      <Typo variant="header1">
        {title} using {APP_NAME}
      </Typo>
      <Typo variant="paragraph">
        {APP_NAME} is one of the best product on the market. So it fits {text} very well. Discover the power of free
        software, a lightweight yet powerful tool designed to enhance your comfort, especially to eliminate {text}{' '}
        issues.
      </Typo>
      <Stack alignItems="center" padding="1rem 0 0 0">
        <Screenshot
          alt={`Screenshot of ${APP_NAME} that solves ${text}`}
          title={`Solution for ${text} is ${APP_NAME} software`}
        />
      </Stack>
      <BlockDownloadButtons />
      <Typo variant="paragraph">
        Remember, {APP_NAME} is not just a utility, it&apos;s a solution designed to make your keyboard experience
        smoother and more intuitive. Download it today and elevate your {text} experience!
      </Typo>

      <Typo variant="header2">{title}</Typo>
      <Typo variant="paragraph">
        <strong>{title}</strong> is important for every computer. Some people doesn&apos;t have any knowledge how to{' '}
        {text}, others understand the {text} trouble very well. There is a ready software solution for {text} topic -{' '}
        {APP_NAME} software by KARPOLAN.
      </Typo>
      <Typo variant="paragraph">
        Other <Link href="/article/">{text} documents and articles</Link> will be published soon. Get more information
        about {text} and the product at web site.
      </Typo>

      <Typo variant="header2">More {title} documents</Typo>
      <Typo variant="paragraph">
        There are many interesting documents relative to {APP_NAME} product and articles to answer {text} questions:
      </Typo>
      <BlockRelativeArticles article={article} />

      <Typo variant="paragraph">
        Also take a look at {APP_NAME} software. It is a ready to use product for {text}.
      </Typo>
    </Wrapper>
  );
};

/**
 * Returns list of all mentioned categories to generate static pages.
 * @returns {Promise<{ article: string }[]>} List of all categories.
 */
export async function generateStaticParams() {
  const articles = await getArticleList();
  const result = articles.map((name) => ({ article: name.replace(/ /g, '-') }));
  IS_DEBUG && console.log('article.generateStaticParams()', JSON.stringify(result));
  return result;
}

export default SingleArticlePage;
