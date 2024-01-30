import { APP_NAME, PUBLIC_URL } from '@/config';
import { Link, Typo, Wrapper } from '@/components';
import { contentFileToUrl, getContentFiles } from '../[...slug]/utils';
import { articleToTitle, articleToUrl, getArticleList } from '../article/utils';
import { getSoftwareList, softwareToTitle, softwareToUrl } from '../software/utils';

interface LinkData {
  url: string;
  title: string;
}

/**
 * Content of the Sitemap page.
 * @page Sitemap
 */
const SitemapPage = async () => {
  const news: LinkData[] = (await getContentFiles()).map((fileName) => {
    const url = contentFileToUrl(fileName);
    const { title } = require(`@/app/(styled)/[...slug]/${fileName}`);
    return { url, title };
  });

  const articles: LinkData[] = (await getArticleList()).map((current) => {
    return { url: articleToUrl(current), title: articleToTitle(current) };
  });

  const software: LinkData[] = (await getSoftwareList()).map((current) => {
    return { url: softwareToUrl(current), title: softwareToTitle(current) };
  });

  return (
    <Wrapper tag="article">
      <Typo variant="header1">Sitemap</Typo>
      <Typo variant="list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/legal/">Legal</Link>
          <Typo variant="list">
            <li>
              <Link href="/legal/terms-conditions/">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/legal/privacy-policy/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/legal/software-license/">Software License</Link>
            </li>
          </Typo>
        </li>
        <li>
          <Link href="/sitemap/">Sitemap</Link>
        </li>
        <li>
          <Link href="/screenshots/">Screenshots</Link>
        </li>
        <li>
          <Link href="/contact/">Contact</Link>
        </li>
        <li>
          <Link href="/download/">Download</Link>
          <Typo variant="list">
            <li>
              <Link href="/download/install/">Install</Link>
            </li>
            <li>
              <Link href="/download/uninstall/">Uninstall</Link>
            </li>
          </Typo>
        </li>
        <li>
          <Link href="/buy/">Buy</Link>
          <Typo variant="list">
            <li>
              <Link href="/buy/donation-received/">Donation Received</Link>
            </li>
          </Typo>
        </li>
        <li>
          <Link href="/news/">News</Link>
          <Typo variant="list">
            {news.map(({ title, url }) => {
              return (
                <li key={url}>
                  <Link href={url}>{title}</Link>
                </li>
              );
            })}
          </Typo>
        </li>

        <li>
          <Link href="/articles/">Articles</Link>
          <Typo variant="list">
            {articles.map(({ title, url }) => {
              return (
                <li key={url}>
                  <Link href={url}>{title}</Link>
                </li>
              );
            })}
          </Typo>
        </li>
        <li>
          <Link href="/software/">Software</Link>
          <Typo variant="list">
            {software.map(({ title, url }) => {
              return (
                <li key={url}>
                  <Link href={url}>{title}</Link>
                </li>
              );
            })}
          </Typo>
        </li>
        <li>
          <Link href="/ping/">PingNotify&trade;</Link>
        </li>
      </Typo>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Sitemap - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/sitemap/`,
  },
};

export default SitemapPage;
