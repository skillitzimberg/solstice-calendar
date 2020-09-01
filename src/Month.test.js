import React from 'react';
import { render } from '@testing-library/react';
import Month from './Month';

test('renders month shell header', () => {
  const { getByText } = render(<Month month="March" />);
  const headerElement = getByText(/march/i);
  expect(headerElement).toBeInTheDocument();
});
