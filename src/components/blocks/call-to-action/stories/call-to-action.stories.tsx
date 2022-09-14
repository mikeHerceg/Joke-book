
import React from 'react';
import { ComponentStory } from '@storybook/react';
import { CallToAction } from '..'

export default {
  title: 'Blocks/Call to Action',
};

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CallToAction> = args => <CallToAction {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  heading:'This is a heading',
  content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat urna et diam porta, vel venenatis felis elementum. Nulla non ante eros. Suspendisse quis ullamcorper nibh, id bibendum urna.',
  ctaText:'call to action',
  ctaLink: '#'
}
