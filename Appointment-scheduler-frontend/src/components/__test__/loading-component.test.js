import React from 'react';
import { render, screen } from '@testing-library/react';

import Loading from '../loading.component'

test('Renders Loading text', () => {
  render(<Loading />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
