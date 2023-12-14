import { FunctionComponent, HTMLAttributes, PropsWithChildren, useMemo } from 'react';
import styles from './Wrapper.module.css';

export interface WrapperProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  fullWidth?: boolean;
  width?: number | string;
}

/**
 * Multifunctional "wrapper" component to make content restricted by width
 * @component Wrapper
 * @prop {boolean} [fullWidth] - if true, wrapper will be 100% width
 * @prop {number} [width] - .width style override
 */
const Wrapper: FunctionComponent<WrapperProps> = ({ className, children, fullWidth, style, width, ...restOfProps }) => {
  const classToRender = useMemo(
    () => [styles.wrapper, fullWidth && styles.fullWidth, className].filter(Boolean).join(' '),
    [className, fullWidth]
  );

  const styleToRender = useMemo(() => {
    const widthToRender = typeof width === 'number' ? `${width}px` : width;
    return { ...(width && { maxWidth: widthToRender, width: widthToRender }), ...style };
  }, [width, style]);

  return (
    <div className={classToRender} style={styleToRender} {...restOfProps}>
      {children}
    </div>
  );
};

export default Wrapper;
