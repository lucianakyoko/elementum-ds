import NextImage from "next/image";

export type IconProps = {
  name: string;
  weight: 'thin' | 'regular' | 'bold';
  size: keyof typeof iconSizeMap;
}

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
  xl3x: 114
};

const Icon = ({ name, weight='regular', size='md2x' }:IconProps) => {
  const iconPath = `/icon/feather-${weight}/${name}.svg`;
  const iconSize = iconSizeMap[size];

  return (
    <NextImage
      src={iconPath}
      alt="icon"
      width={iconSize}
      height={iconSize}
    />
  );
};

export default Icon;
