
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';

    import { Page } from '../page.component';

    export default {
      title: 'Components/Page',
      component: Page,
      argTypes: {},
    } as ComponentMeta<typeof Page>;


    const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

    export const Default = Template.bind({});

    Default.args = {

    };

  