import { Link, Typo, Wrapper } from '@/components';
import { ContentFile, contentFileToDateString, contentFileToUrl, getContentFiles } from '../[...slug]/utils';

/**
 * Content of "News" page, it was a Blog before
 * @page News
 */
const NewsPage = async () => {
  const contentFiles = await getContentFiles();
  const articles: ContentFile[] = contentFiles.map((fileName: string) => {
    const { tags, categories, content, title } = require(`@/app/(main)/[...slug]/${fileName}`);
    const titleWithDate = `${contentFileToDateString(fileName)} - ${title}`;
    const href = contentFileToUrl(fileName);
    return { tags, categories, content, title: titleWithDate, href };
  }, []);

  return (
    <Wrapper tag="article">
      <Typo variant="header1">News</Typo>
      <Typo variant="list">
        {articles.map(({ title, href }) => (
          <li key={title}>
            <Link href={href ?? '/news/'}>{title}</Link>
          </li>
        ))}
      </Typo>
    </Wrapper>
  );
};

export default NewsPage;
