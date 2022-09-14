// Generated with util/create-component.js
// @ts-ignore
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';

import { JokeCard } from './joke-card.component';


const mockJoke = {

}

describe('JokeCard', () => {


  const renderComponent = () => render(<JokeCard jokeData={mockJoke}/>);

  it('should render correctly', () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId('joke-card');
    expect(component).toBeDefined();
  });
});

