import NextImage from "next/image";

export type AvatarImageProps = {
  src: string,
  height: number,
  width: number
}

export const AvatarImage = ({ src, width, height }:AvatarImageProps) => {
  return (
    <NextImage
      src={src}
      alt="User avatar"
      width={width}
      height={height}
    />
  );
};
