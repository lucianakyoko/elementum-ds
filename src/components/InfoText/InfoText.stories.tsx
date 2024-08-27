import { Meta, StoryObj } from '@storybook/react';
import InfoText, { InfoTextProps, infoTextColorTypeMap, infoTextSizeTypeMap } from './InfoText';

const colors = Object.keys(infoTextColorTypeMap) as (keyof typeof infoTextColorTypeMap)[];
const sizes = Object.keys(infoTextSizeTypeMap) as (keyof typeof infoTextSizeTypeMap)[];

const meta: Meta<InfoTextProps> = {
  title: 'Design System/ Molecules/ Info Text',
  component: InfoText,
  argTypes: {
    color: {
      control: 'select',
      options: colors
    },
    size: {
      control: 'radio',
      options: sizes
    }
  } 
};

export default meta;

type Story = StoryObj<typeof InfoText>

export const SmallPrimary: Story = {
  args: {
    color: 'primary',
    size: 'small'
  }
}

export const MediumPrimary: Story = {
  args: {
    color: 'primary',
    size: 'medium'
  }
}

export const LargePrimary: Story = {
  args: {
    color: 'primary',
    size: 'large'
  }
}

