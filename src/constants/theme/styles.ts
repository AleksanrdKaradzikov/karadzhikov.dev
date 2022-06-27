import { ThemeComponentProps } from '@chakra-ui/react';

export const styles = {
    global: ({ colorMode }: ThemeComponentProps) => {
        return {
            'html, body': {
                backgroundColor: colorMode === 'dark' ? 'bg.dark' : 'bg.light',
                scrollBehavior: "smooth",
            },
            '.BlogPagination': {
                display: 'flex',
                listStyleType: 'none',
                columnGap: '10px',
                alignItems: 'center',
            },
            '.BlogPagination__link': {
                w: '45px',
                position: 'relative',
                h: '45px',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                boxShadow: 'base',
                fontWeight: '600',
                fontSize: '18px',
                justifyContent: 'center',
                backgroundColor: colorMode === 'dark' ? 'bg.headerBgDark' : 'bg.headerBgLight',
                borderRadius: '50%',
                transition: 'all .3s ease',
                '&:hover': {
                    boxShadow: 'xl',
                    transform: 'scale(1.1) translateY(-5px)',
                },
                '&--disabled': {
                    display: 'none',
                },
                '&--active': {
                    bg: 'green.400',
                    '&:hover': {
                        transform: 'scale(1) translateY(0)',
                        boxShadow: 'none',
                    }
                }
            },
            '.Article-content': {
                'img': {
                    maxW: {
                        base: '100%',
                        md: '80%',
                        lg: '80%',
                    },
                    margin: 'auto',
                }
            }
        };
    }
};