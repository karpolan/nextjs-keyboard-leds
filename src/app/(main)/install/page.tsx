import { redirect } from 'next/navigation';

/**
 * Redirect to real page
 */
const PageRedirect = () => {
  return redirect('/download/install/');
};

export default PageRedirect;
