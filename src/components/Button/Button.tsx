'use client';
import { FunctionComponent, HTMLAttributes, PropsWithChildren, useCallback, useMemo, KeyboardEvent } from 'react';
import FONTS from '@/layout/fonts';
import {
  BUTTON_ICON_SIZE,
  BUTTON_MARGIN,
  BUTTON_VARIANT,
  ICON_COLOR_INVERTED,
  ICON_COLOR_NORMAL,
} from '@/components/config';
import { Icon, Link, Stack } from '@/components';
import styles from './Button.module.css';

export type ButtonVariant = 'contained' | 'outlined' | 'text' | 'icon';

export interface ButtonProps extends PropsWithChildren<HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>> {
  href?: string;
  icon?: string;
  iconLeft?: string;
  iconRight?: string;
  margin?: string | number;
  variant?: ButtonVariant;
}

/**
 * Renders standard "Button"
 * @component Button
 * @param {string} [href] - optional href, if provided, button will be rendered as <a> tag
 * @param {string} [icon] - optional icon to render on the button
 * @param {string} [iconLeft] - optional icon to render on the left side of the button
 * @param {string} [iconRight] - optional icon to render on the right side of the button
 * @param {ButtonVariant} [variant] - variant of the button, defaults to "contained"
 */
const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  href,
  icon,
  iconLeft = icon, // Use .icon as default value for .iconLeft
  iconRight,
  margin = BUTTON_MARGIN,
  style,
  variant = BUTTON_VARIANT,
  onKeyDown,
  ...restOfProps
}) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (event.key === 'Spacebar' || event.key === ' ') {
        event.preventDefault();
        event.currentTarget.click();
      }
      onKeyDown?.(event);
    },
    [onKeyDown]
  );

  const classToRender = useMemo(
    () => [FONTS.poppins.className, styles.button, styles[variant], className].filter(Boolean).join(' '),
    [className, FONTS.poppins.className, variant]
  );

  const styleToRender = useMemo(() => ({ ...style, margin: margin }), [margin, style]);

  const buttonContent = useMemo(() => {
    if (!iconLeft && !iconRight) {
      return children; // No icons, just render children
    }
    const iconColor = variant === 'contained' ? ICON_COLOR_INVERTED : ICON_COLOR_NORMAL;
    return (
      <Stack direction="row" justifyContent="center" alignItems="center" gap="0.5rem">
        {iconLeft && <Icon icon={iconLeft} color={iconColor} size={BUTTON_ICON_SIZE}></Icon>}
        {children && <div>{children}</div>}
        {iconRight && <Icon icon={iconRight} color={iconColor} size={BUTTON_ICON_SIZE}></Icon>}
      </Stack>
    );
  }, [children, iconLeft, iconRight, variant]);

  if (href) {
    return (
      <Link
        className={classToRender}
        href={href}
        style={styleToRender}
        {...restOfProps}
        // Actually onKeyDown handler is not needed, because <Link/> already handles this
        // onKeyDown={handleKeyDown}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button className={classToRender} style={styleToRender} {...restOfProps} onKeyDown={handleKeyDown}>
      {buttonContent}
    </button>
  );
};

export default Button;
