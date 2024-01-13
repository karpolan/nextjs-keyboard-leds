import { FunctionComponent, PropsWithChildren } from 'react';
import './globals.css';

/**
 * Root layout, renders only the <html> tag!
 * @layout RootLayout
 */
const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <html lang="en">{children}</html>;
};

export default RootLayout;
