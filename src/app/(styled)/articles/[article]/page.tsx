import { NextPage } from 'next';
import { redirect } from 'next/navigation';
import { ArticleProps } from '../../article/[article]/page';

export { generateStaticParams } from '../../article/[article]/page'; // For static generation

/**
 * Redirect to the Single article page
 */
const SingleArticleRedirect: NextPage<ArticleProps> = ({ params: { article } }) => {
  return redirect(`/article/${article}/`);
};

export default SingleArticleRedirect;

// Code for "route.tsx" file, but a build is not working for some reason :(
// export async function GET(_: Request, { params: { article } }: ArticleProps) {
//   return redirect(`/article/${article}`);
// }
