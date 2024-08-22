import NextImage from 'next/image';
import avatarIcon from '@/assets/avatar/avatar-default-icon.svg';

export type AvatarIconProps = {
  height: number,
  width: number
}

export const AvatarIcon = ({ width, height }:AvatarIconProps) => {
  return (
    <NextImage 
      src={avatarIcon}
      alt='avatar icon'
      width={width}
      height={height}
    />
  )
};
