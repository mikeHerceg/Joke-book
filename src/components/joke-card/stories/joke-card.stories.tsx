
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';

    import { JokeCard } from '../joke-card.component';

    export default {
      title: 'Components/Joke Card',
      component: JokeCard,
      argTypes: {},
    } as ComponentMeta<typeof JokeCard>;


    const Template: ComponentStory<typeof JokeCard> = (args) => <JokeCard {...args} />;

    export const Default = Template.bind({});

    Default.args = {

    };

  