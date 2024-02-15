import { redirect } from 'next/navigation';

/**
 * Redirect to real page
 */
const PageRedirect = () => {
  return redirect('/download/uninstall/');
};

export default PageRedirect;
