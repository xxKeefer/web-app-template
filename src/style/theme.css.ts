import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
    color: {
        black: '#000',
        white: '#fff',
        cyan: '#00ffff',
        magenta: '#ff00ff',
        yellow: '#ffff00',
    },
    space: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '2rem',
        xl: '4rem',
        xxl: '8rem',
    },
    font: {
        size: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.25rem',
            xl: '1.5rem',
            xxl: '2rem',
        },
        weight: {
            xs: '200',
            sm: '300',
            md: '400',
            lg: '500',
            xl: '600',
            xxl: '900',
        },
        lineHeight: {
            xs: '0.5rem',
            sm: '0.75rem',
            md: '1rem',
            lg: '1.25rem',
            xl: '1.5rem',
            xxl: '2rem',
        },
    },
    border: {
        radius: {
            xs: '0.25rem',
            sm: '0.5rem',
            md: '1rem',
            lg: '2rem',
            xl: '4rem',
            xxl: '8rem',
        },
        line: {
            xs: '0.0625rem',
            sm: '0.125rem',
            md: '0.25rem',
            lg: '0.5rem',
            xl: '1rem',
            xxl: '2rem',
        },
        style: {
            solid: 'solid',
            none: 'none',
        },
    },
});
