import Avatar from "../Avatar/Avatar";

export const profileAvatarSizeTypeMap = {
  extraSmall: 'sm2x' as 'sm2x',
  small: 'sm3x' as 'sm3x',
  medium: 'md' as 'md',
  extraMedium: 'md3x' as 'md3x',
  large: 'lg' as 'lg',
  extraLarge: 'lg2x' as 'lg2x'
};

export const profileAvatarCornerTypeMap = {
  sharp: 'sharp' as 'sharp',
  soft: 'soft' as 'soft',
  smooth: 'smooth' as 'smooth'
};

export const profileAvatarVariantTypeMap = {
  default: 'bg-transparente',
  story: 'bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500',
  onLine: 'bg-[#23C965]',
  away: 'bg-[#FFC14A]'
};

export type ProfileAvatarProps = {
  size?: keyof typeof profileAvatarSizeTypeMap;
  corner?: keyof typeof profileAvatarCornerTypeMap;
  variant?: keyof typeof profileAvatarVariantTypeMap;
  imageSrc?: string;
}

const ProfileAvatar = ({
  size='small',
  corner='sharp',
  variant='default',
  imageSrc='',
}: ProfileAvatarProps) => {
  const sizeType = profileAvatarSizeTypeMap[size];
  const cornerType = profileAvatarCornerTypeMap[corner];
  const variantType = profileAvatarVariantTypeMap[variant];

  return (
    <div
      className={`
        w-fit relative overflow-hidden p-[1px] 
        ${cornerType === 'sharp' ? 'rounded-none' : 
          cornerType === 'soft' ? 'rounded-lg' : 'rounded-full'
        }
        ${cornerType}
        ${variantType}
      `}  
    >
      <Avatar 
        imageSrc={imageSrc}
        size={sizeType}
        corner={cornerType}
      />
    </div>
  )
};

export default ProfileAvatar;