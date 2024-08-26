import Icon from "../Icon/Icon";

export const IconBoxSizeTypeMap = {
  small: {
    container: 'w-[44px] h-[44px]',
    iconSize: 'sm' as 'sm'
  },
  medium: {
    container: 'w-[48px] h-[48px]',
    iconSize: 'md' as 'md'
  },
  large: {
    container: 'w-[52px] h-[52px]',
    iconSize: 'md2x' as 'md2x'
  }
};

export const IconBoxCornerTypeMap = {
  sharp: 'rounded-none',
  soft: ' rounded-lg',
  smooth: 'rounded-full'
};

export const IconBoxColorTypeMap = {
  primary: '#7A44FF',
  secondary: '#9569FF',
  tertiary: '#3994FF',
  positive: '#23C965',
  negative: '#FF554A',
  warning: '#FFC14A',
  light: '#F0F1F3',
  dark: '#151A2D',
  readOnly: '#BCC3E3'
};

export const IconBoxVariantTypeMap = {
  filled: (color: string) => ({
    backgroundColor: color,
    color: '#FFFFFF',
    border: `1px solid ${color}`
  }),
  soft: (color: string) => ({
    backgroundColor: `${color}17`,
    color: color,
    border: `1px solid transparent`
  }),
  strokeSoft: (color: string) => ({
    backgroundColor: 'transparent',
    border: `1px solid ${color}56`,
    color: color
  }),
  stroked: (color: string) => ({
    backgroundColor: 'transparent',
    border: `1px solid ${color}`,
    color: color
  }),
  boldStroke: (color: string) => ({
    backgroundColor: `${color}17`,
    border: `4px solid ${color}56`,
    color: color
  })
};

export type IconBoxProps = {
  iconName?: string;
  colorType?: keyof typeof IconBoxColorTypeMap,
  corner?: keyof typeof IconBoxCornerTypeMap,
  variant?: keyof typeof IconBoxVariantTypeMap,
  size?: keyof typeof IconBoxSizeTypeMap
}

const IconBox = ({
  iconName='lock',
  colorType='primary',
  corner='sharp',
  variant='filled',
  size='medium'
}: IconBoxProps) => {
  const color = IconBoxColorTypeMap[colorType];
  const cornerType = IconBoxCornerTypeMap[corner];
  const variantType = IconBoxVariantTypeMap[variant]?.(color) || {};
  const sizeType = IconBoxSizeTypeMap[size];

  return (
    <div
      style={variantType}
      className={`flex items-center justify-center ${cornerType} ${sizeType.container}`}
    >
      <Icon 
        name={iconName}
        weight="regular"
        color={variant === 'filled' ? '#FFFFFF' : color}
        size={sizeType.iconSize}
      />
    </div>
  );
};

export default IconBox;