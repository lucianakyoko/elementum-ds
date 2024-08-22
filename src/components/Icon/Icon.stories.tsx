import { Meta, StoryObj } from "@storybook/react";
import Icon, { iconSizeMap, IconProps } from "./Icon";

const sizes = Object.keys(iconSizeMap)

const meta: Meta<IconProps> = {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'text'
      },
    },
    weight: {
      control: {
        type: 'select',
      },
      options: ['light', 'regular', 'bold']
    },
    size: {
      control: {
        type: 'select',
      },
      options: sizes,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'trash',
  }
};

export const LightLg: Story = {
  args: {
    name: 'trash',
    weight: 'thin',
    size: 'lg'
  }
};

export const Bold3XL: Story = {
  args: {
    name: 'trash',
    weight: 'bold',
    size: 'xl3x'
  }
};
