import { Meta, StoryObj } from '@storybook/react';
import Toggle, { ToggleProps, toggleSizeTypeMap, toggleColorTypeMap } from './Toggle';

const sizes = Object.keys(toggleSizeTypeMap) as (keyof typeof toggleSizeTypeMap)[];
const colors = Object.keys(toggleColorTypeMap) as (keyof typeof toggleColorTypeMap)[];

const meta: Meta<ToggleProps> = {
  title: 'Design System/ Molecules/ Toggle',
  component: Toggle,
  argTypes: {
    size: {
      control: 'radio',
      options: sizes
    },
    color: {
      control: 'select',
      options: colors
    }
  }
}

export default meta;

type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {}
}