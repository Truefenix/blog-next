import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
    it('should render a heading', () => {
        render(
            <ThemeProvider theme={theme}>
                <Heading>Oi</Heading>
            </ThemeProvider>
        );
    });
});
