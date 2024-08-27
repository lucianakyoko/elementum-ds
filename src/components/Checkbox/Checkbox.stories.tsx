import { Meta, StoryObj } from '@storybook/react';
import Checkbox, { CheckboxProps, checkTypeMap, checkSizeTypeMap, checkStatTypeMap, checkColorTypeMap } from './Checkbox';

const checkTypes = Object.keys(checkTypeMap) as (keyof typeof checkTypeMap)[];
const sizes = Object.keys(checkSizeTypeMap) as (keyof typeof checkSizeTypeMap)[];
const stats = Object.keys(checkStatTypeMap) as (keyof typeof checkStatTypeMap)[];
const colors = Object.keys(checkColorTypeMap) as (keyof typeof checkColorTypeMap)[];

const meta: Meta<CheckboxProps> = {
  title: 'Design System/ Molecules/ Checkbox',
  component: Checkbox,
  argTypes: {
    checkOption: {
      control: 'radio',
      options: checkTypes
    },
    size: {
      control: 'radio',
      options: sizes
    },
    stat: {
      control: 'select',
      options: stats
    },
    color: {
      control: 'select',
      options: colors
    },
    checked: {
      control: 'boolean'
    },
    focused: {
      control: 'boolean'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Checkbox>

export const CheckBoxDisplay: Story = {
  args: {
    checkOption: 'check',
    size: "small",
    stat: "default",
    color: "primary",
    checked: true,
    focused: false
  }
}

export const RadioDisplay: Story = {
  args: {
    checkOption: 'radio',
    size: "medium",
    stat: "checked",
    color: "primary",
    checked: true,
    focused: false
  }
}