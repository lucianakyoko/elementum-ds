import { Meta, StoryObj } from '@storybook/react';
import TextArrangement, { TextArrangementProps, textArrangementsMap } from './TextArrangements';

const variants = Object.keys(textArrangementsMap) as (keyof typeof textArrangementsMap)[];;
const elements = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div'];

const meta:Meta<TextArrangementProps> = {
  title: 'Design System/Molecules/Text Arrangements',
  component: TextArrangement,
  argTypes: {
    variant: {
      control: 'select',
      options: variants
    },
    titleElement: {
      control: 'select',
      options: elements,
    },
    subtitleElement: {
      control: 'select',
      options: elements,
    },
    titleClassName: {
      control: 'text',
    },
    subtitleClassName: {
      control: 'text',
    },
  }
};

export default meta;

type Story = StoryObj<typeof TextArrangement>;

export const DisplayHeadingAndCaption: Story = {
  args: {
    variant: 'headingAndCaption',
    title: 'Heading 0123',
    subtitle: 'Paragraph 4567',
  },
};

export const DisplayCaptionAndBody: Story = {
  args: {
    variant: 'captionAndBody',
    title: 'Heading 0123',
    subtitle: 'Paragraph 4567',
  },
};

export const DisplayHeadingAndBody: Story = {
  args: {
    variant: 'headingAndBody',
    title: 'Heading 0123',
    subtitle: 'Paragraph 4567',
  },
};

export const DisplayOlList: Story = {
  args: {
    variant: 'olList',
    title: 'Heading 0123',
    subtitle: 'Paragraph 4567',
  },
};

export const DisplayUlList: Story = {
  args: {
    variant: 'ulList',
    title: 'Heading 0123',
    subtitle: 'Paragraph 4567',
  },
};

export const DisplayAndHeading: Story = {
  args: {
    variant: 'displayAndHeading',
    title: 'Heading 0123',
    subtitle: 'Paragraph 4567',
  },
};

export const DisplayAndHeadingLarge: Story = {
  args: {
    variant: 'displayAndHeadingLarge',
    title: 'Heading 0123',
    subtitle: 'Paragraph 4567',
  },
};
