import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
    colors: {
        discord: {
            500: '#0073D1',
            600: '#214074',
        },
    },
    fonts: {
        body: 'Whitney, system-ui, sans-serif',
        caps: 'ABC Ginto Normal, Ginto Normal, system-ui, sans-serif',
    },
    styles: {
        global: {
            body: {
                fontSize: 'sm',
            },
        },
    },
    components: {
        Checkbox: {
            parts: ['label', 'control'],
            sizes: {
                md: {
                    control: {
                        _checked: {
                            bg: 'discord.500',
                            borderColor: 'discord.500',
                        },
                    },
                    label: {
                        fontSize: 'sm',
                    },
                },
            },
        },
        Radio: {
            parts: ['label', 'control'],
            sizes: {
                md: {
                    control: {
                        _checked: {
                            bg: 'discord.500',
                            borderColor: 'discord.500',
                        },
                    },
                    label: {
                        fontSize: 'sm',
                    },
                },
            },
        },
        FormLabel: {
            baseStyle: {
                fontFamily: 'caps',
                fontSize: 'xs',
                textTransform: 'uppercase',
                color: 'gray.700',
            },
        },
        Button: {
            variants: {
                solid: () => ({
                    fontWeight: 'semibold',
                    fontSize: 'sm',
                    borderRadius: 'base',
                    color: 'white',
                    bg: 'discord.500',
                    _hover: {
                        bg: 'discord.600',
                    },
                }),
            },
        },
    },
});
