'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-BR">
            <body>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
