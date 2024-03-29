import { MetadataRoute } from 'next';
import { PUBLIC_URL } from '@/config';
import { contentFileToUrl, getContentFiles } from './(main)/[...slug]/utils';
import { getTagList, tagToUrl } from './(main)/tag/utils';
import { categoryToUrl, getCategoryList } from './(main)/category/utils';
import { articleToUrl, getArticleList } from './(main)/article/utils';
import { getSoftwareList, softwareToUrl } from './(main)/software/utils';

async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();
  const lastModified = currentDate.substring(0, currentDate.indexOf('T'));

  const contentList = await getContentFiles();
  const news: MetadataRoute.Sitemap = contentList.map((name) => ({
    url: `${PUBLIC_URL}${contentFileToUrl(name)}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const tagList = await getTagList();
  const tags: MetadataRoute.Sitemap = tagList.map((name) => ({
    url: `${PUBLIC_URL}${tagToUrl(name)}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const categoryList = await getCategoryList();
  const categories: MetadataRoute.Sitemap = categoryList.map((name) => ({
    url: `${PUBLIC_URL}${categoryToUrl(name)}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const articleList = await getArticleList();
  const articles: MetadataRoute.Sitemap = articleList.map((name) => ({
    url: `${PUBLIC_URL}${articleToUrl(name)}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  const softwareList = await getSoftwareList();
  const software: MetadataRoute.Sitemap = softwareList.map((name) => ({
    url: `${PUBLIC_URL}${softwareToUrl(name)}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [
    {
      url: PUBLIC_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${PUBLIC_URL}/legal/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${PUBLIC_URL}/legal/privacy-policy/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${PUBLIC_URL}/legal/terms-conditions/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${PUBLIC_URL}/legal/software-license/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${PUBLIC_URL}/screenshots/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${PUBLIC_URL}/download/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${PUBLIC_URL}/download/install/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${PUBLIC_URL}/download/uninstall/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${PUBLIC_URL}/buy/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${PUBLIC_URL}/buy/donation-received/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${PUBLIC_URL}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${PUBLIC_URL}/news/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...news,
    {
      url: `${PUBLIC_URL}/category/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...categories,
    {
      url: `${PUBLIC_URL}/tag/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...tags,
    {
      url: `${PUBLIC_URL}/article/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...articles,
    {
      url: `${PUBLIC_URL}/software/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...software,
    {
      url: `${PUBLIC_URL}/sitemap/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}

export default sitemap;
