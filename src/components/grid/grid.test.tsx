// Generated with util/create-component.js

import React from 'react';
import { render } from '@testing-library/react';

import { Grid } from './grid.component';

describe('Grid', () => {


  const renderComponent = () => render(<Grid/>);

  it('should render correctly', () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId('grid');
    expect(component).toBeDefined();
  });
});

