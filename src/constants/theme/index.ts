import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { styles } from './styles';
import { colors } from './colors';
import { components } from './components';

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

export const theme = extendTheme({ colors, styles, config, components });
