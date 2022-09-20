import React from 'react';
import { render } from '@testing-library/react';

import { Home } from './home';

describe('Home', () => {


    it('should render correctly', () => {
      // Arrange
      const renderComponent = () => render(<Home/>);

      // Act
      const { getByText } = renderComponent();

      // Assert
      const component = getByText('Jokes');
      expect(component).toBeDefined();
    });
  });
