'use client';
import { useState } from "react";
import Icon from "../Icon/Icon";

export const checkTypeMap = {
  radio: 'rounded-full',
  check: 'rounded-sm'
};

export const checkSizeTypeMap = {
  small: 'sm' as 'sm',
  medium: 'md' as 'md',
  large: 'md2x' as 'md2x'
};

export const checkStatTypeMap = {
  default: (color:string) => ({
    border: `1px solid ${color}`,
    backgroundColor: 'transparent'
  }),
  focused: (color: string) => ({
    border: `4px solid ${color}56`,
    backgroundColor: `${color}14`
  }),
  checked: (color: string) => ({
    border: `1px solid ${color}`,
    backgroundColor: color
  })
};

export const checkColorTypeMap = {
  primary: '#7A44FF',
  secondary: '#9A4AFF',
  tertiary: '#3994FF',
  positive: '#23C965',
  negative: '#FF554A',
  warning: '#FFC14A',
  dark: '#151A2D',
  readOnly: '#BCC3E3',
  disabled: '#9DA6CB'
};

export type CheckboxProps = {
  checkOption?: keyof typeof checkTypeMap;
  size?: keyof typeof checkSizeTypeMap;
  stat?: keyof typeof checkStatTypeMap;
  color?: keyof typeof checkColorTypeMap;
  checked?: boolean;
  focused?: boolean;
  onChange?: (checked:boolean) => void;
};

const Checkbox = ({ 
  checkOption='radio',
  size= 'small',
  stat='default',
  color='primary',
  checked=false,
  focused=false,
  onChange
}: CheckboxProps) => {
  const [ isChecked, setIsChecked ] = useState(checked);
  const [ isFocused, setIsFocused ] = useState(focused);
  const colorType = checkColorTypeMap[color]
  const sizeType = checkSizeTypeMap[size];
  const statType = checkStatTypeMap[stat]?.(colorType);
  const checkType = checkTypeMap[checkOption];

  const handleClick = () => {
    setIsChecked(!isChecked);
    if(onChange) onChange(!isChecked);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const currentStatType = isChecked
  ? checkStatTypeMap.checked(colorType)
  : isFocused
    ? checkStatTypeMap.focused(colorType)
    : checkStatTypeMap.default(colorType);

  return (
    <div
      style={currentStatType}
      className={`
        ${sizeType === 'sm' ? 'w-[16px] h-[16px]' : 
          sizeType === 'md' ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]'
         }
        flex items-center justify-center ${checkType} cursor-pointer`}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
    >
      {isChecked && (
        <Icon 
          weight='regular' 
          name="check" 
          color="#FFFFFF"
          size={sizeType}
        />
      )}
    </div>
  );
};

export default Checkbox;