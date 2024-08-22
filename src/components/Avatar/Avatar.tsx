
import { AvatarImage } from "./AvatarImage";
import { AvatarIcon } from "./AvatarIcon";

export type AvatarProps = {
  size?: 'xs3x' | 'xs2x' | 'xs' | 'sm' | 'sm2x' | 'sm3x' | 'md' | 'md2x' | 'md3x' | 'lg' | 'lg2x' | 'lg3x' | 'xl' | 'xl2x' | 'xl3x',
  imageSrc?: string,
}
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

 const Avatar = ({ size='md', imageSrc }:AvatarProps) => {
  const { width, height } = avatarSizeMap[size] || { width: 36, height: 36 }
  const avatarComponent = imageSrc ? (
    <AvatarImage src={imageSrc} width={width} height={height}/>
  ) : <AvatarIcon width={width} height={height} />

  return (
    <div className={`w=[${width}px] h-[${height}px]`}>
      { avatarComponent }
    </div>
  )
}

export default Avatar