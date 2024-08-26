import Icon from "../Icon/Icon";
import Typography from "../Typography/Typography";

export const buttonLayoutMap = {
  textAndIcon: (size: string) => `
  ${size==='small' && 'gap-4 px-12 py-3'}
  ${size ==='medium' && 'gap-4 px-12 py-3'}
  ${size ==='large' && 'gap-4 px-12 py-3'}
`,
  iconic: (size: string) => `
  ${size==='small' && 'w-[45px] h-[45px]'}
  ${size ==='medium' && 'w-[48px] h-[48px]'}
  ${size ==='large' && 'w-[51px] h-[51px]'}
`,
  numeric: (size: string) => `
    ${size==='small' && 'w-[45px] h-[45px]'}
    ${size ==='medium' && 'w-[48px] h-[48px]'}
    ${size ==='large' && 'w-[51px] h-[51px]'}
  `
}

export const buttonColorTypeMap = {
  primary: '#7A44FF',
  secondary: '#9569FF',
  tertiary: '#3994FF',
  positive: '#23C965',
  negative: '#FF554A',
  warning: '#FFC14A',
  dark: '#151A2D',
  readOnly: '#BCC3E3'
};

export const buttonSizeMap = {
  small: {
    text: 'xsRegular' as 'xsRegular',
    icon: 'sm' as 'sm',
  },
  medium: {
    text:'smRegular' as 'smRegular',
    icon: 'md' as 'md',
  },
  large: {
    text:'mdRegular' as 'mdRegular',
    icon: 'md2x' as 'md',
  }
};

export const buttonCornerMap  ={
  sharp: 'rounded-none',
  soft: ' rounded-lg',
  smooth: 'rounded-full'
};

export const buttonStyleMap = {
  filled: (color: string) => ({
    backgroundColor: color,
    color: '#FFFFFF',
    border: `1px solid ${color}`,
  }),
  strokedStrong: (color: string) => ({
    backgroundColor: 'transparent',
    color: color,
    border: `1px solid ${color}`,
  }),
  strokedSoft: (color: string) => ({
    backgroundColor: 'transparent',
    color: color,
    border: `1px solid ${color}56`,
  }),
  softFillAndStroked: (color: string) => ({
    backgroundColor: `${color}17`,
    color: color,
    border: `1px solid ${color}56`,
  }),
  softFill: (color: string) => ({
    backgroundColor: `${color}17`,
    color: color,
    border: `1px solid transparent`,
  }),
  noStroked: (color: string) => ({
    backgroundColor: 'transparent',
    color: color,
    border: `1px solid transparent`,
  }),
};

export type ButtonProps = {
  layout?: keyof typeof buttonLayoutMap,
  colorType?: keyof typeof buttonColorTypeMap,
  size?: keyof typeof buttonSizeMap,
  corner?: keyof typeof buttonCornerMap,
  variant?: keyof typeof buttonStyleMap,
  text?: string,
  iconName?: string
}

const Button = ({ 
  layout='textAndIcon',
  colorType='primary',
  size='medium',
  corner='sharp',
  variant='filled',
  text='',
  iconName='grid'
}:ButtonProps) => {
  const layoutType = buttonLayoutMap[layout]?.(size);
  const color = buttonColorTypeMap[colorType];
  const iconSizeType = buttonSizeMap[size].icon;      
  const textSizeType = buttonSizeMap[size].text;      
  const cornerType = buttonCornerMap[corner];
  const styleType = buttonStyleMap[variant]?.(color);

  return (
    <button 
      style={styleType}
      className={`
        flex items-center justify-center hovered-btn hover:opacity-85
        ${layoutType}
        ${cornerType}
    `}>
      { layout === 'textAndIcon' && (
        <>
          <Icon
            name={iconName}
            weight='regular'
            size={iconSizeType}
            color={variant === 'filled' ? '#FFFFFF' : color}
          /> 
          <Typography 
            text={text}
            variant={textSizeType}
            className={variant === 'filled' ? '#FFFFFF' : color}
          /> 
        </>
      )}

      { layout === 'iconic' && (
        <Icon
          name={iconName}
          weight='regular'
          size={iconSizeType}
          color={variant === 'filled' ? '#FFFFFF' : color}
        /> 
      )}

      { layout === 'numeric' && (
        <Typography 
          text={text}
          variant={textSizeType}
          className={variant === 'filled' ? '#FFFFFF' : color}
        /> 
      )}

    </button>
  );
};

export default Button;
