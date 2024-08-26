import React from 'react';
import * as icons from 'react-feather';

const iconMap: { [key: string]: React.ComponentType<any> } = {};

Object.keys(icons).forEach((iconName) => {
  iconMap[toPascalCase(iconName)] = (icons as any)[iconName];
});

export const iconSizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  md2x: 24,
  md3x: 32,
  lg: 48,
  lg2x: 64,
  lg3x: 72,
  xl: 84,
  xl2x: 96,
  xl3x: 114,
};

export const strokeWidthMap = {
  thin: 1,
  regular: 2,
  bold: 3,
};

export interface IconProps {
  name: string;
  size?: keyof typeof iconSizeMap;
  color?: string;
  weight: keyof typeof strokeWidthMap;
}

function toPascalCase(name: string): string {
  return name
    .split('-') 
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

const Icon: React.FC<IconProps> = ({ name, size='md2x', weight='regular', color='currentColor' }) => {
  const iconKey = toPascalCase(name);
  const IconComponent = iconMap[iconKey];
  const iconSize = iconSizeMap[size];
  const strokeWidth = strokeWidthMap[weight];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found!`);
    return null; 
  }

  return <IconComponent size={iconSize} color={color} strokeWidth={strokeWidth} />;
};

export default Icon;
