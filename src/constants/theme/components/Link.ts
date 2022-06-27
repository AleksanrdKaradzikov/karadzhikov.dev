import type { ComponentStyleConfig } from '@chakra-ui/theme';

const defaultNavbarProps = {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    px: "3",
    transition: "all .3s ease",
    position: "relative",
    _hover: {
        textDecoration: "none",
        color: "green.400",
        _after: {
            background: "green.400",
        }
    },
    _after: {
        content: '""',
        position: "absolute",
        display: "block",
        width: "100%",
        height: "3px",
        transition: "background .3s ease",
        background: "transparent",
        bottom: 0,
        left: 0,
    }
}

export const Link: ComponentStyleConfig = {
    baseStyle: {
        _active: { boxShadow: 'none' },
        _focus: { boxShadow: 'none' },
    },
    variants: {
        navbar: {
            ...defaultNavbarProps,
        },
        navbarActive: {
            ...defaultNavbarProps,
            color: "green.400",
            _after: {
                ...defaultNavbarProps._after,
                background: "green.400",
            }
        }
    }
};

export const BreadcrumbLink: ComponentStyleConfig = {
    baseStyle: {
        _active: { boxShadow: 'none' },
        _focus: { boxShadow: 'none' },
    },
};