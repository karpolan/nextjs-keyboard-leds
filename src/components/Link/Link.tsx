'use client';
import { FunctionComponent, PropsWithChildren, useMemo, KeyboardEvent, useCallback, AnchorHTMLAttributes } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { EXTERNAL_LINK_PROPS } from '@/utils';

export interface LinkProps extends PropsWithChildren<NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> {
  activeClassName?: string;
  className?: string;
  href: string;
}

/**
 * Extends <Link/> component with .activeClassName property, opens external links in new tab.
 * @component Link
 */
const Link: FunctionComponent<LinkProps> = ({
  activeClassName = 'active',
  children,
  className,
  href,
  onKeyDown,
  ...restOfProps
}) => {
  const pathname = usePathname();

  const isActive = useMemo(
    () => pathname === href || `${pathname}/` === href || pathname === `${href}/`,
    [href, pathname]
  );

  const isExternal = useMemo(
    () => href.startsWith('http') || href.startsWith('mailto') || href.startsWith('//'),
    [href]
  );

  const linkClassName = useMemo(
    () => [className, isActive && activeClassName].filter(Boolean).join(' ') || undefined,

    [className, activeClassName, isActive]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLAnchorElement>) => {
      if (event.key === 'Spacebar' || event.key === ' ') {
        event.preventDefault();
        event.currentTarget.click(); // Emulate click by Spacebar
      }
      onKeyDown?.(event);
    },
    [onKeyDown]
  );

  return (
    <NextLink
      className={linkClassName}
      href={href}
      {...(isExternal && EXTERNAL_LINK_PROPS)}
      {...restOfProps}
      onKeyDown={handleKeyDown}
    >
      {children}
    </NextLink>
  );
};

export default Link;
