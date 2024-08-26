import { Meta, StoryObj } from '@storybook/react';
import IconBox, { IconBoxProps, IconBoxColorTypeMap, IconBoxCornerTypeMap, IconBoxVariantTypeMap, IconBoxSizeTypeMap } from './IconBox';

const colors  = Object.keys(IconBoxColorTypeMap) as (keyof typeof IconBoxColorTypeMap)[];
const corners  = Object.keys(IconBoxCornerTypeMap) as (keyof typeof IconBoxCornerTypeMap)[];
const variants  = Object.keys(IconBoxVariantTypeMap) as (keyof typeof IconBoxVariantTypeMap)[];
const sizes  = Object.keys(IconBoxSizeTypeMap) as (keyof typeof IconBoxSizeTypeMap)[];

const meta: Meta<IconBoxProps> = {
  title: 'Design System/ Molecules/ Icon Box',
  component: IconBox,
  argTypes: {
    iconName: {
      control:'text'
    },
    colorType: {
      control: 'select',
      options: colors
    },
    corner: {
      control: 'select',
      options: corners
    },
    variant: {
      control: 'select',
      options: variants
    },
    size: {
      control: 'select',
      options: sizes
    },
  }
}

export default meta;

type Story = StoryObj<typeof IconBox>

export const DefaultIconBox = {
  args: {}
}