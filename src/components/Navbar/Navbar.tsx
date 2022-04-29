import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    Container,
    Flex,
    Box,
    Link as ChakraLink,
    useColorModeValue,
    useColorMode,
    Button,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { Logo } from '../Logo';
import { staticRoutes } from '../../constants/routes';

const backdropFilter = "saturate(180%) blur(0.35rem)";

const Navbar = () => {
    const router = useRouter();
    const headerBg = useColorModeValue('bg.headerBgLight', 'bg.headerBgDark');
    const colorModeIcon = useColorModeValue(faMoon, faSun);
    const { toggleColorMode } = useColorMode();

    return (
        <Box h={['54px', '54px', '80px']} bg={headerBg} backdropFilter={backdropFilter} position="fixed" top="0" left="0" w="full">
            <Container maxW="container.xl" as="header" h="full">
                <Flex alignItems="center" justifyContent="space-between" h="full">
                    <Flex alignItems="center" h="full">
                        <Box mr="10">
                            <Logo />
                        </Box>
                        <Flex as="nav" h="full">
                            {staticRoutes.map(({ label, path }) => {
                                const variant = router.pathname === path ? "navbarActive" : "navbar";

                                return (
                                    <Link href={path}>
                                        <ChakraLink variant={variant} ml="2">
                                            {label}
                                        </ChakraLink>
                                    </Link>
                                );
                            })}
                        </Flex>
                    </Flex>
                    <Box>
                        <Button
                            w="48px"
                            h="48px"
                            variant="ghost"
                            onClick={toggleColorMode}
                        >
                            <FontAwesomeIcon icon={colorModeIcon} />
                        </Button>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar;