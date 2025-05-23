import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

describe('Hello component', () => {
    it('renders with name', () => {
        render(<Hello name="Maria" />);
        expect(screen.getByText('Hello, Maria!')).toBeInTheDocument();
    });
});
