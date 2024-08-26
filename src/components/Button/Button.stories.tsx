import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps, buttonLayoutMap, buttonStyleMap, buttonSizeMap, buttonCornerMap, buttonColorTypeMap } from './Button';

const layouts = Object.keys(buttonLayoutMap) as (keyof typeof buttonLayoutMap)[];
const styles = Object.keys(buttonStyleMap) as (keyof typeof buttonStyleMap)[];
const sizes = Object.keys(buttonSizeMap) as (keyof typeof buttonSizeMap)[];
const corners = Object.keys(buttonCornerMap) as (keyof typeof buttonCornerMap)[];
const colors = Object.keys(buttonColorTypeMap) as (keyof typeof buttonColorTypeMap)[];

const meta: Meta<ButtonProps> = {
  title: 'Design System/ Molecules/ Button',
  component: Button,
  argTypes: {
    layout: {
      control: 'select',
      options:layouts 
    },
    variant: {
      control: 'select',
      options: styles
    },
    text: {
      control: 'text'
    },
    size: {
      control: 'select',
      options: sizes
    },
    colorType: {
      control: 'select',
      options: colors
    },
    corner: {
      control: 'select',
      options: corners
    }
  }
}

export default meta;

type Story = StoryObj<typeof Button>
export const CenteredTextAndIconLayout: Story = {
  args:{
    layout: 'textAndIcon',
    variant: 'filled',
    text: 'Button text'
  }
};

export const IconicLayout: Story = {
  args: {
    layout: 'iconic',
    variant: 'filled'
  }
};

export const NumericLayout: Story = {
  args: {
    layout: 'numeric',
    variant: 'filled',
    text: '1'
  }
}

export const ButtonCenteredSmoothCorner: Story = {
  args:{
    layout: 'textAndIcon',
    variant: 'filled',
    text: 'Button text',
    corner: 'smooth'
  }
};

export const ButtonIconic: Story = {
  args:{
    layout:"iconic",
    variant:'filled',
  }
};

export const ButtonSmall: Story ={
  args:{
    layout:"iconic",
    variant:'filled',
    size: 'small'
  }
};
export const ButtonMedium: Story ={
  args:{
    layout:"iconic",
    variant:'filled',
    size: 'medium'
  }
};
export const ButtonLarge: Story ={
  args:{
    layout:"iconic",
    variant:'filled',
    size: 'large'
  }
};

export const ButtonNumericSoftCorner: Story = {
  args:{
    layout:"numeric",
    variant:'filled',
    text: '12',
    size: 'large',
    corner: 'soft',
  }
};

export const ButtonNumeric: Story = {
  args:{
    layout:"numeric",
    variant:'filled',
    text: '12',
    size: 'large'
  }
};
