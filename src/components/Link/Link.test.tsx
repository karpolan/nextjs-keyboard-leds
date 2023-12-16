import React, { FunctionComponent, PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import Link, { LinkProps } from './Link';
import mockRouter from 'next-router-mock';
import { useRouter } from 'next/router';
import { act } from 'react-dom/test-utils';
/* IMPORTANT! To get 'next/router' working with tests, add into "jest.setup.js" file following:
---
jest.mock('next/router', () => require('next-router-mock')); 
---
*/

// Also moke 'next/navigation' to get usePathname() working
jest.mock('next/navigation', () => ({
  usePathname() {
    const { asPath } = useRouter();
    return asPath;
  },
}));

/**
 * A mock for Next.js Router
 */
const MockRouter: FunctionComponent<PropsWithChildren> = ({ children }) => {
  useRouter();
  return <>{children}</>;
};

/**
 * NavLink wrapped with Mocked Router
 */
const ComponentToTest: FunctionComponent<LinkProps> = (props) => (
  <MockRouter>
    <Link {...props} />
  </MockRouter>
);

describe('<NavLink/> component', () => {
  it('renders itself', () => {
    const text = 'sample text';
    const url = 'https://example.com/';
    render(<ComponentToTest href={url}>{text}</ComponentToTest>);
    const link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
  });

  it('supports external links', () => {
    const text = 'external link';
    const url = 'https://example.com/';
    render(<ComponentToTest href={url}>{text}</ComponentToTest>);
    const link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link.tagName.toLowerCase()).toBe('a');
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    expect(link).toHaveAttribute('rel', expect.stringContaining('noreferrer'));
  });

  it('supports internal links', () => {
    const text = 'internal link';
    const url = '/internal-link';
    render(<ComponentToTest href={url}>{text}</ComponentToTest>);
    const link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  test('applies .activeClassName for active link only', () => {
    let link;
    let textActive = 'internal link with activeClassName';
    let textPassive = 'internal link without activeClassName';
    let url = '/internal-link';
    let activeClassName = 'super-active-class';

    // router.pathname doesn't match .href prop
    act(() => {
      mockRouter.push('not-' + url);
    });
    render(
      <ComponentToTest href={url} activeClassName={activeClassName}>
        {textPassive}
      </ComponentToTest>
    );
    link = screen.getByText(textPassive);
    expect(link).toBeDefined();
    expect(link).not.toHaveClass(activeClassName);

    // router.pathname matches .href prop
    act(() => {
      mockRouter.push(url);
    });
    render(
      <ComponentToTest href={url} activeClassName={activeClassName}>
        {textActive}
      </ComponentToTest>
    );
    link = screen.getByText(textActive);
    expect(link).toBeDefined();
    expect(link).toHaveClass(activeClassName);
  });

  test('detects active link with or without trailing slash', () => {
    let link;
    let text1 = 'link with trailing slash';
    // let text2 = 'link without trailing slash';
    let url = '/internal-link/without-slash';
    let activeClassName = 'some-active-class';
    act(() => {
      mockRouter.push(url); // Without trailing slash
    });
    render(
      <ComponentToTest
        href={url + '/'} // With trailing slash
        activeClassName={activeClassName}
      >
        {text1}
      </ComponentToTest>
    );
    link = screen.getByText(text1);
    expect(link).toBeDefined();
    expect(link).toHaveClass(activeClassName);

    // TODO:  mockRouter.asPath always returns url without trailing slash :( We need to test this case somehow
    // act(() => {
    //   mockRouter.push(url + '/'); // With trailing slash
    // });

    // console.log('mockRouter.asPath', mockRouter.asPath);
    // render(
    //   <ComponentToTest
    //     href={url} // Without trailing slash
    //     activeClassName={activeClassName}
    //   >
    //     {text2}
    //   </ComponentToTest>
    // );
    // link = screen.getByText(text2);
    // expect(link).toBeDefined();
    // expect(link).toHaveClass(activeClassName);
  });

  test('renders custom .className and .activeClassName', () => {
    const className = 'super-class';
    const activeClassName = 'super-active-class';
    const url = '/custom';
    act(() => {
      mockRouter.push(url);
    });
    const { getByText } = render(
      <ComponentToTest href={url} className={className} activeClassName={activeClassName}>
        Custom Link
      </ComponentToTest>
    );
    const linkElement = getByText('Custom Link');
    expect(linkElement).toHaveClass(className);
    expect(linkElement).toHaveClass(activeClassName);
  });

  test('renders no .className when it is not set', () => {
    const url = '/no-class-name';
    const { getByText } = render(<ComponentToTest href={url}>No Class Link</ComponentToTest>);
    const linkElement = getByText('No Class Link');
    expect(linkElement).not.toHaveAttribute('class');
    expect(linkElement).not.toHaveClass();
  });

  test('renders .children content correctly', () => {
    const { getByText } = render(
      <ComponentToTest href="/children" activeClassName="active">
        <span>Child component</span>
      </ComponentToTest>
    );

    const linkElement = getByText('Child component');
    expect(linkElement).toBeInTheDocument();
  });
});
