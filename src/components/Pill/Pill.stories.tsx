import { Meta, StoryObj } from '@storybook/react';
import Pill, { PillProps, pillVariantTypeMap, pillCornerTypeMap, pillColorTypeMap, pillSizeTypeMap} from './Pill';

const variants = Object.keys(pillVariantTypeMap) as (keyof typeof pillVariantTypeMap)[];
const corners = Object.keys(pillCornerTypeMap) as (keyof typeof pillCornerTypeMap)[];
const colors = Object.keys(pillColorTypeMap) as (keyof typeof pillColorTypeMap)[];
const sizes = Object.keys(pillSizeTypeMap) as (keyof typeof pillSizeTypeMap)[];

const meta: Meta<PillProps> = {
  title: 'Design System/ Molecules/ Pill',
  component: Pill,
  argTypes: {
    text: {
      control: 'text'
    },
    variant: {
      control: 'select',
      options: variants
    },
    corner: {
      control: 'select',
      options: corners
    },
    color: {
      control: 'select',
      options: colors
    },
    size: {
      control: 'select',
      options: sizes
    }
  }
}

export default meta;

type Story = StoryObj<typeof Pill>

export const DefaultVariant: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'primary'
  }
}
export const LightShadowVariant: Story = {
  args: {
    variant: 'lightShadow',
    text: '100',
    color: 'primary'
  }
}
export const StrokeStrongVariant: Story = {
  args: {
    variant: 'strokeStrong',
    text: '100',
    color: 'primary'
  }
}
export const StrokeSoftVariant: Story = {
  args: {
    variant: 'strokeSoft',
    text: '100',
    color: 'primary'
  }
}
export const SoftFillSoftStrokeVariant: Story = {
  args: {
    variant: 'softFillSoftStroke',
    text: '100',
    color: 'primary'
  }
}
export const SoftVariant: Story = {
  args: {
    variant: 'soft',
    text: '100',
    color: 'primary'
  }
}

export const PrimaryColor: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'primary'
  }
}

export const SecondaryColor: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'secondary'
  }
}

export const TertiaryColor: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'tertiary'
  }
}

export const PositiveColor: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'positive'
  }
}

export const NegativeColor: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'negative'
  }
}

export const WarningColor: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'warning'
  }
}

export const DarkColor: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'dark'
  }
}

export const ReadonlyColor: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'readOnly'
  }
}

export const SharpCorner: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'primary',
    corner: 'sharp'
  }
}
export const SmoothCorner: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'primary',
    corner: 'smooth'
  }
}
export const SoftCorner: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'primary',
    corner: 'soft'
  }
}

export const Small: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'primary',
    size: 'small'
  }
}
export const Medium: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'primary',
    size: 'medium'
  }
}
export const Large: Story = {
  args: {
    variant: 'default',
    text: '100',
    color: 'primary',
    size: 'large'
  }
}