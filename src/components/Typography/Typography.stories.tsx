import { Meta, StoryObj } from '@storybook/react';
import Typography, { typographyMap, TypographyProps } from './Typography';

const variants = Object.keys(typographyMap) as (keyof typeof typographyMap)[];
const elements = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div'];

const meta:Meta<TypographyProps> = {
  title: 'Design System/Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
    },
    element: {
      control: 'select',
      options: elements,
    },
    className: {
      control: 'text',
    },
    text: {
      control: 'text',
    }
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const DisplayXLRegular: Story = {
  args: {
    text: 'Hello world',
    variant: 'h1Medium',
    element: 'h1',
    className: 'text-gray-800',
  },
};

export const DisplayLGRegular: Story = {
  args: {
    text: 'Hello world',
    variant: 'lgRegular',
    element: 'h1',
    className: 'text-gray-800',
  },
};

export const DisplayMDRegular: Story = {
  args: {
    text: 'Hello world',
    variant: 'mdRegular',
    element: 'h1',
    className: 'text-gray-800',
  },
};

export const DisplayXSRegular: Story = {
  args: {
    text: 'Hello world',
    variant: 'xsRegular',
    element: 'h1',
    className: 'text-gray-800',
  },
};
 