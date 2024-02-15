import { redirect } from 'next/navigation';

/**
 * Redirect to the "All articles" page
 */
const AllArticlesRedirect = () => {
  return redirect('/article/');
};

export default AllArticlesRedirect;
