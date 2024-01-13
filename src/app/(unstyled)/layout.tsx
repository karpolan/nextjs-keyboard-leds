import { FunctionComponent, PropsWithChildren, Suspense } from 'react';
import { Analytics } from '@/layout/components';
import './unstyled.css';

/**
 * Layout for (unstyled) pages, renders head and body tags
 * @layout UnstyledLayout
 */
const UnstyledLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <head>
        <Suspense>
          <Analytics />
        </Suspense>
      </head>
      <body>
        <div className="content">{children}</div>
      </body>
    </>
  );
};

export default UnstyledLayout;
