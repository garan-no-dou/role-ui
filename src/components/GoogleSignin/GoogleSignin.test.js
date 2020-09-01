import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GoogleSignin from './GoogleSignin';

describe('<GoogleSignin />', () => {
  test('it should mount', () => {
    render(<GoogleSignin />);
    
    const signin = screen.getByTestId('GoogleSignin');

    expect(signin).toBeInTheDocument();
  });
});