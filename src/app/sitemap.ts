import { MetadataRoute } from 'next';
import { PUBLIC_URL } from '@/config';
import { contentFileToUrl, getContentFiles } from './(styled)/[...slug]/utils';
import { getTagList, tagToUrl } from './(styled)/tag/utils';
import { categoryToUrl, getCategoryList } from './(styled)/category/utils';
import { articleToUrl, getArticleList } from './(styled)/article/utils';

async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();
  const lastModified = currentDate.substring(0, currentDate.indexOf('T'));

  const contentList = await getContentFiles();
  const news: MetadataRoute.Sitemap = contentList.map((fileName) => ({
    url: `${PUBLIC_URL}${contentFileToUrl(fileName)}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const tagList = await getTagList();
  const tags: MetadataRoute.Sitemap = tagList.map((tag) => ({
    url: `${PUBLIC_URL}${tagToUrl(tag)}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const categoryList = await getCategoryList();
  const categories: MetadataRoute.Sitemap = categoryList.map((category) => ({
    url: `${PUBLIC_URL}${categoryToUrl(category)}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const articleList = await getArticleList();
  const articles: MetadataRoute.Sitemap = articleList.map((article) => ({
    url: `${PUBLIC_URL}${articleToUrl(article)}`,
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
  ];
}

export default sitemap;
