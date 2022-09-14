// Generated with util/create-component.js

import React from 'react';
import { render } from '@testing-library/react';

import { Page } from './page.component';

describe('Page', () => {


  const renderComponent = () => render(<Page/>);

  it('should render correctly', () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId('page');
    expect(component).toBeDefined();
  });
});

