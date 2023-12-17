import { Link } from '@/components';

/**
 * Content of the Header's Menu
 * @component TopMenuContent
 */
const TopMenuContent = () => {
  return (
    <ul role="menu">
      <li role="menuitem">
        <Link href="/">Home</Link>
      </li>
      <li role="menuitem">
        <Link href="/screenshots">Screenshots</Link>
      </li>
      <li role="menuitem">
        <Link href="/download">Download</Link>
      </li>
      <li role="menuitem">
        <Link href="/buy">Buy</Link>
      </li>
      <li role="menuitem">
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default TopMenuContent;
