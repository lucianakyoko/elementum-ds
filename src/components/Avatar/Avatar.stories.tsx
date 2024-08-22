import { Meta, StoryObj } from '@storybook/react';
import Avatar, { type AvatarProps } from "./Avatar";

const meta: Meta<AvatarProps> = {
  title: 'Design System/Atoms/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['xs3x', 'xs2x', 'xs', 'sm', 'sm2x', 'sm3x', 'md', 'md2x', 'md3x', 'lg', 'lg2x', 'lg3x', 'xl', 'xl2x', 'xl3x'],
    },
    imageSrc: {
      control: 'text',
    },
  },
} 
export default meta;

export const Default:StoryObj<AvatarProps> = {
  args: {}
};

