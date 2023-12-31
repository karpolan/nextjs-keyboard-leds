import { Link, Typo } from '@/components';

export const categories = ['social media', 'website'];
export const tags = ['internet', 'images', 'website'];
export const title = 'Gravatars are Cool!';
export const content = (
  <>
    <Typo variant="paragraph">
      We added support for <Link href="http://gravatar.com">Gravatars</Link> at the <Link href="/news/">News/Blog</Link>{' '}
      part of our website. So the profile picture is automatically shown for every user in comments and discussions.
    </Typo>
  </>
);
