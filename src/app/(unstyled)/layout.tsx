import { FunctionComponent, PropsWithChildren, Suspense } from 'react';
import { Analytics } from '@/layout/components';
import './unstyled.css';

/**
 * Layout for (unstyled) pages, renders body tag
 * @layout UnstyledLayout
 */
const UnstyledLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <body>
      <div className="content">{children}</div>
      <Suspense>
        <Analytics />
      </Suspense>
    </body>
  );
};

export default UnstyledLayout;
