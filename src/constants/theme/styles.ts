import { ThemeComponentProps } from '@chakra-ui/react';

export const styles = {
    global: ({ colorMode }: ThemeComponentProps) => {
        return {
            'html, body': {
                backgroundColor: colorMode === 'dark' ? 'bg.dark' : 'bg.white',
            },
        };
    }
};