
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';

    import { MediaObject } from '../media-object.component';

    export default {
      title: 'Blocks/Media Object',
      component: MediaObject,
      argTypes: {},
    } as ComponentMeta<typeof MediaObject>;


    const Template: ComponentStory<typeof MediaObject> = (args) => <MediaObject {...args} />;

    export const Default = Template.bind({});

    Default.args = {
        alignment:'top-right',
        image:{
            src:'https://picsum.photos/500/500',
            alt:'Random image',
        },
        content:<><h1>this is my block</h1><p>with some extra text</p></>
    };

