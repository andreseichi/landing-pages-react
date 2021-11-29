import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'asd',
    light: false,
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof Heading>;

export const Light: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const Dark: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} light={true} />
);
