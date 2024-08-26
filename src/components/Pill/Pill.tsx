import Typography from "../Typography/Typography";

export const pillSizeTypeMap = {
  small: 'xsRegular' as 'xsRegular',
  medium: 'smRegular' as 'smRegular',
  large: 'mdRegular' as 'mdRegular'
};

export const pillCornerTypeMap = {
  sharp: 'rounded-none',
  soft: ' rounded-lg',
  smooth: 'rounded-full',
};

export const pillColorTypeMap = {
  primary: '#7A44FF',
  secondary: '#9A4AFF',
  tertiary: '#3994FF',
  positive: '#23C965',
  negative: '#FF554A',
  warning: '#FFC14A',
  dark: '#151A2D',
  readOnly: '#BCC3E3'
};

export const pillVariantTypeMap = {
  default: (color: string) => ({
    backgroundColor: color,
    border: `1px solid ${color}`,
    color: '#FFFFFF'
  }),
  lightShadow: (color: string) => ({
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.16)',
    backgroundColor: 'transparent',
    border: `1px solid transparent`,
    color: color
  }),
  strokeStrong: (color: string) => ({
    backgroundColor: 'transparent',
    border: `1px solid ${color}`,
    color: color
  }),
  strokeSoft: (color: string) => ({
    backgroundColor: 'transparent',
    border: `1px solid ${color}56`,
    color: color

  }),
  softFillSoftStroke: (color: string) => ({
    backgroundColor: `${color}17`,
    color: color,
    border: `1px solid ${color}56`,
  }),
  soft: (color: string) => ({
    backgroundColor: `${color}17`,
    color: color,
    border: `1px solid transparent`,
  })
}

export type PillProps = {
  text: string;
  variant?: keyof typeof pillVariantTypeMap;
  color?: keyof typeof pillColorTypeMap;
  corner?: keyof typeof pillCornerTypeMap;
  size?: keyof typeof pillSizeTypeMap;
}

const Pill = ({
  text='100',
  variant='default',
  color='primary',
  corner='sharp',
  size='medium'
}: PillProps) => {
  const variantType = pillVariantTypeMap[variant]?.(pillColorTypeMap[color]);
  const colorType= pillColorTypeMap[color];
  const cornerType = pillCornerTypeMap[corner];
  const sizeType = pillSizeTypeMap[size]

  return (
    <div
      style={variantType}
      className={`
        w-fit py-[2px] px-2
        ${cornerType}
      `}
    >
      <Typography 
        text={text}
        variant={sizeType}
      />
    </div>
  )
};

export default Pill;
