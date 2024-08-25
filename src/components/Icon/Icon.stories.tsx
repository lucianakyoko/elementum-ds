import { Meta, StoryObj } from "@storybook/react";
import Icon, { iconSizeMap, strokeWidthMap, IconProps } from "./Icon";

const sizes = Object.keys(iconSizeMap);
const weights = Object.keys(strokeWidthMap);

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
      options: weights,
    },
    size: {
      control: {
        type: 'select',
      },
      options: sizes,
    },
    color: {
      control: {
        type: 'color'
      }
    }
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'trash',
    weight: 'regular',
    size: 'md'
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
