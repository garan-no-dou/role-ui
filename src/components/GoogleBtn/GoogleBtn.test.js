import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GoogleBtn from './GoogleBtn';

describe('<GoogleBtn />', () => {
  test('it should mount', () => {
    render(<GoogleBtn />);
    
    const googleBtn = screen.getByTestId('GoogleBtn');

    expect(googleBtn).toBeInTheDocument();
  });
});