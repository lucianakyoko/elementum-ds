import { AvatarImage } from "./AvatarImage";
import { AvatarIcon } from "./AvatarIcon";

export const avatarCornerTypeMap = {
  sharp: 'rounded-none',
  soft: 'rounded-lg',
  smooth: 'rounded-full'
};

const avatarSizeMap = {
  xs3x: { width: 12, height: 12 },
  xs2x: { width: 16, height: 16 },
  xs: { width: 20, height: 20 },
  sm: { width: 24, height: 24 },
  sm2x: { width: 28, height: 28 },
  sm3x: { width: 32, height: 32 },
  md: { width: 36, height: 36 },
  md2x: { width: 40, height: 40 },
  md3x: { width: 44, height: 44 },
  lg: { width: 48, height: 48 },
  lg2x: { width: 64, height: 64 },
  lg3x: { width: 72, height: 72 },
  xl: { width: 84, height: 84 },
  xl2x: { width: 96, height: 96 },
  xl3x: { width: 144, height: 144 },
};

export type AvatarProps = {
  size?: keyof typeof avatarSizeMap,
  imageSrc?: string,
  className?: string,
  corner?: keyof typeof avatarCornerTypeMap;
}

 const Avatar = ({ 
    size='md', 
    imageSrc, 
    corner='sharp', 
    className
  }:AvatarProps) => {
  const { width, height } = avatarSizeMap[size] || { width: 36, height: 36 };
  const cornerType = avatarCornerTypeMap[corner];

  const avatarComponent = imageSrc ? (
    <AvatarImage src={imageSrc} width={width} height={height}/>
  ) : <AvatarIcon width={width} height={height} />

  return (
    <div className={`w=[${width}px] h-[${height}px] ${className} ${cornerType} overflow-hidden`}>
      { avatarComponent }
    </div>
  )
}

export default Avatar