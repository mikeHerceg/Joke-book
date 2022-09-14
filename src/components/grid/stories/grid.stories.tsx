
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';

    import { Grid } from '../grid.component';

    export default {
      title: 'Components/Grid',
      component: Grid,
      argTypes: {},
    } as ComponentMeta<typeof Grid>;


    const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

    export const Default = Template.bind({});

    Default.args = {

    };

  