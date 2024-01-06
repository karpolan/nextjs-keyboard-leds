import { FunctionComponent, PropsWithChildren } from 'react';
import './globals.css';

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <html lang="en">{children}</html>;
};

export default RootLayout;
