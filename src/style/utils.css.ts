import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { theme } from './theme.css';

const { space, color, font, border } = theme;

const responsiveProperties = defineProperties({
    conditions: {
        mobile: {},
        tablet: { '@media': 'screen and (min-width: 768px)' },
        desktop: { '@media': 'screen and (min-width: 1024px)' },
    },
    defaultCondition: 'mobile',
    properties: {
        display: ['none', 'flex', 'block', 'inline'],
        flexDirection: ['row', 'column'],
        justifyContent: [
            'stretch',
            'flex-start',
            'center',
            'flex-end',
            'space-around',
            'space-between',
        ],
        alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
        paddingTop: space,
        paddingBottom: space,
        paddingLeft: space,
        paddingRight: space,
        marginTop: space,
        marginBottom: space,
        marginLeft: space,
        marginRight: space,
    },
    shorthands: {
        padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
        paddingX: ['paddingLeft', 'paddingRight'],
        paddingY: ['paddingTop', 'paddingBottom'],
        margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
        marginX: ['marginLeft', 'marginRight'],
        marginY: ['marginTop', 'marginBottom'],
        placeItems: ['justifyContent', 'alignItems'],
    },
});

const fontProperties = defineProperties({
    conditions: {
        mobile: {},
        tablet: { '@media': 'screen and (min-width: 768px)' },
        desktop: { '@media': 'screen and (min-width: 1024px)' },
    },
    defaultCondition: 'mobile',
    properties: {
        fontSize: font.size,
        fontWeight: font.weight,
        lineHeight: font.lineHeight,
    },
    shorthands: {
        size: ['fontSize', 'lineHeight'],
        font: ['fontSize', 'fontWeight', 'lineHeight'],
    },
});

const colorProperties = defineProperties({
    conditions: {
        lightMode: {},
        darkMode: { '@media': '(prefers-color-scheme: dark)' },
    },
    defaultCondition: 'lightMode',
    properties: {
        color,
        background: color,
    },
});

const borderProperties = defineProperties({
    conditions: {
        mobile: {},
        tablet: { '@media': 'screen and (min-width: 768px)' },
        desktop: { '@media': 'screen and (min-width: 1024px)' },
    },
    defaultCondition: 'mobile',
    properties: {
        borderRadius: border.radius,
        borderWidth: border.line,
        borderColor: color,
        borderStyle: border.style,
    },
});

export const sprinkles = createSprinkles(
    responsiveProperties,
    colorProperties,
    fontProperties,
    borderProperties
);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
