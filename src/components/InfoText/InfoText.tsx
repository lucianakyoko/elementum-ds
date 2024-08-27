import Icon from "../Icon/Icon";
import Typography from "../Typography/Typography";

export const infoTextSizeTypeMap = {
  small: {
    icon: 'sm' as 'sm',
    text: 'xsRegular' as 'xsRegular'
  },
  medium: {
    icon: 'md' as 'md',
    text: 'smRegular' as 'smRegular'
  },
  large: {
    icon: 'md2x' as 'md2x',
    text: 'mdRegular' as 'mdRegular'
  },
};

export const infoTextColorTypeMap = {
  primary: '#7A44FF',
  secondary: '#9569FF',
  tertiary: '#3994FF',
  positive: '#23C965',
  negative: '#FF554A',
  warning: '#FFC14A',
  light: '#e3e5ea',
  dark: '#151A2D',
  gray: '#667085',
  disabled: '#9DA6CB'
};

export type InfoTextProps = {
  size?: keyof typeof infoTextSizeTypeMap;
  color?: keyof typeof infoTextColorTypeMap;
  text?: string;
}

const InfoText = ({ 
    size='small', 
    color='disabled', 
    text='Info text' 
}: InfoTextProps) => {
  const iconSizeType = infoTextSizeTypeMap[size].icon;
  const textSizeType = infoTextSizeTypeMap[size].text;
  const colorType = infoTextColorTypeMap[color];

  return (
    <div 
      style={{ color: colorType }}
      className='flex items-center gap-2'
      >
      <Icon
        name="info"
        weight="regular"
        size={iconSizeType}
      />

      <Typography 
         style={{ color: colorType }}
        text={text}
        variant={textSizeType}
      />
    </div>
  );
};

export default InfoText;
