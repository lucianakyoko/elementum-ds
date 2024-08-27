'use client'

import { useState } from "react";

export const toggleSizeTypeMap = {
  small: {
    container: 'w-12 h-7',
    switcher: 'w-5 h-5',
  },
  medium: {
    container: 'w-12 h-8',
    switcher: 'w-6 h-6',
  }
};

export const toggleColorTypeMap = {
  primary: '#7A44FF',
  secondary: '#9569FF',
  tertiary: '#3994FF',
  positive: '#23C965',
  negative: '#FF554A',
  warning: '#FFC14A',
  dark: '#151A2D',
  disabled: '#a19d9d',
};

export type ToggleProps = {
  size?: keyof typeof toggleSizeTypeMap;
  color?: keyof typeof toggleColorTypeMap;
  turnedOn?: boolean;
}

const Toggle = ({size='small', color='primary', turnedOn=true}: ToggleProps) => {
  const [ isTurnedOn, setIsTornedOn ] = useState(turnedOn);
  const containerSizeType = toggleSizeTypeMap[size].container;
  const switcherSizeType = toggleSizeTypeMap[size].switcher;
  const colorType = toggleColorTypeMap[color];
  const handleToggle = () => setIsTornedOn(!isTurnedOn);
  
  return (
    <div
      style={{
        backgroundColor: `${colorType}26`
      }}
      className={`
        cursor-pointer
        bg-opacity-20 rounded-full relative
        ${containerSizeType}
      `}
      onClick={handleToggle}
    >
      <div
        className={`
          shadow-xsm-bg
          rounded-full absolute ${isTurnedOn ? 'right-1' : 'left-1'}
          ${switcherSizeType}
        `}
        style={{
          backgroundColor: `${isTurnedOn ? colorType : '#FFFFFF'}`,
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      ></div>
    </div>
  );
};

export default Toggle;
