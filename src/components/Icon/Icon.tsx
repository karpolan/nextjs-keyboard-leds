import { FunctionComponent, SVGAttributes } from 'react';
import { ICON_COLOR_NORMAL, ICON_SIZE } from '../config';
import { ICONS } from './icons';

export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  icon?: string;
  size?: string | number;
  title?: string;
}

/**
 * Renders SVG icon by given Icon name
 * @param {string} [icon] - name of the Icon to render
 */
const Icon: FunctionComponent<IconProps> = ({
  color = ICON_COLOR_NORMAL,
  icon = 'default',
  size = ICON_SIZE,
  style,
  ...restOfProps
}) => {
  const iconName = (icon || 'default').trim().toLowerCase();

  let ComponentToRender = ICONS[iconName];
  if (!ComponentToRender) {
    console.warn(`Icon: icon "${iconName}" is not found!`);
    ComponentToRender = ICONS['default'];
  }

  const propsToRender = {
    height: size,
    color,
    fill: color ? 'currentColor' : undefined,
    size,
    style: { ...style, color },
    width: size,
    ...restOfProps,
  };

  return <ComponentToRender data-icon={iconName} {...propsToRender} />;
};

export default Icon;
