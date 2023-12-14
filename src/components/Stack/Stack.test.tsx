import { FunctionComponent } from 'react';
import { render, screen } from '@testing-library/react';
import Stack, { StackProps } from './Stack';

/**
 * Composition of component(s) to test
 */
const ComponentToTest: FunctionComponent<StackProps> = (props) => {
  return <Stack {...props} />;
};

describe('<Stack/> component', () => {
  //   beforeEach(() => {});

  it('renders itself', () => {
    let text = 'sample text';
    render(<ComponentToTest>{text}</ComponentToTest>);
    let div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveTextContent(text);
  });

  it('has .direction as "column" by default', () => {
    let text = 'default direction is "column"';
    render(<ComponentToTest>{text}</ComponentToTest>);
    let div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveClass('column');
    // const style = window.getComputedStyle(div);
    // expect(style.flexDirection).toBe('column');
  });

  it('supports .direction property', () => {
    let text = 'direction column';
    render(<ComponentToTest direction="column">{text}</ComponentToTest>);
    let div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveClass('column');
    // const style = window.getComputedStyle(div);
    // expect(style.flexDirection).toBe('column');

    text = 'direction row';
    render(<ComponentToTest direction="row">{text}</ComponentToTest>);
    div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveClass('row');
    // const style = window.getComputedStyle(div);
    // expect(style.flexDirection).toBe('row');
  });

  it('supports .className property', () => {
    let text = 'div with specific class';
    let className = 'someClassName';
    render(<ComponentToTest className={className}>{text}</ComponentToTest>);
    let div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveClass(className);
  });

  it('supports .gap property', () => {
    let text = 'div with gap property';
    let gap = '13rem';
    render(<ComponentToTest gap={gap}>{text}</ComponentToTest>);
    let div = screen.getByText(text);
    expect(div).toBeDefined();
    expect(div).toHaveStyle('gap: 13rem');
  });
});
