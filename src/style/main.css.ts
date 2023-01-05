import { globalFontFace, globalStyle, style } from '@vanilla-extract/css';

import { theme } from './theme.css';

const { color } = theme;

globalFontFace('Mona Sans', {
    src: `url(./src/style/fonts/Mona-Sans.woff2) format('woff2 supports variations'), url(./src/style/fonts/Mona-Sans.woff2) format('woff2-variations')`,
    fontWeight: '200 900',
    fontStretch: '75% 125%',
});

globalStyle('*', {
    fontFamily: 'Mona Sans',
    boxSizing: 'border-box',
});

export const root = style({
    color: color.black,
    backgroundColor: color.white,
});
