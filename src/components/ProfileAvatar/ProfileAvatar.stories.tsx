import { Meta, StoryObj } from '@storybook/react';
import ProfileAvatar, {
   ProfileAvatarProps, 
   profileAvatarSizeTypeMap, 
   profileAvatarCornerTypeMap,
   profileAvatarVariantTypeMap
} from './ProfileAvatar';

const sizes = Object.keys(profileAvatarSizeTypeMap) as (keyof typeof profileAvatarSizeTypeMap)[];
const corners = Object.keys(profileAvatarCornerTypeMap) as (keyof typeof profileAvatarCornerTypeMap)[];
const variants = Object.keys(profileAvatarVariantTypeMap) as (keyof typeof profileAvatarVariantTypeMap)[];

const meta: Meta<ProfileAvatarProps> = {
  title: 'Design System/ Molecules/ Profile Avatar',
  component: ProfileAvatar,
  argTypes: {
    size: {
      control: 'select',
      options: sizes
    },
    corner: {
      control: 'select',
      options: corners
    },
    variant: {
      control: 'select',
      options: variants
    },
    imageSrc: {
      control: 'text'
    }
  }
};

export default meta;

type Story = StoryObj<typeof ProfileAvatar>

export const SharpProfileAvatar: Story = {
  args: {
    corner: 'sharp',
  }
};

export const ShoftProfileAvatar: Story = {
  args: {
    corner: 'soft',
  }
};

export const SmoothProfileAvatar: Story = {
  args: {
    corner: 'smooth',
  }
};

