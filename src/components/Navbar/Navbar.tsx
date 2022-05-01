import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    Container,
    Flex,
    Box,
    Link as ChakraLink,
    useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ToggleModeButton } from "../ToggleModeButton";
import { TelegramButton } from "../TelegramButton";
import { Logo } from '../Logo';
import { staticRoutes } from '../../constants/routes';

const backdropFilter = "saturate(180%) blur(0.35rem)";

const variants = {
    hidden: { opacity: 0, x: 0, y: -50 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -50 }
}

const motionProps = {
    initial: "hidden",
    animate: "enter",
    exit: "exit",
    variants,
    transition: { duration: 1, type: 'easeInOut' },
}

const Navbar = () => {
    const router = useRouter();
    const headerBg = useColorModeValue('bg.headerBgLight', 'bg.headerBgDark');

    return (
        <motion.div
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}
            {...motionProps}
        >
            <Box
                boxShadow="sm"
                h={['54px', '54px', '80px']}
                bg={headerBg}
                backdropFilter={backdropFilter}
            >
                <Container maxW="container.xl" as="header" h="full">
                    <Flex alignItems="center" justifyContent="space-between" h="full">
                        <Flex alignItems="center" h="full">
                            <Box mr="10">
                                <Logo />
                            </Box>
                            <Flex as="nav" h="full" display={['none', 'none', 'flex', 'flex']}>
                                {staticRoutes.map(({ label, path }) => {
                                    const variant = router.pathname === path ? "navbarActive" : "navbar";

                                    return (
                                        <Link href={path} key={path}>
                                            <ChakraLink variant={variant} ml="2">
                                                {label}
                                            </ChakraLink>
                                        </Link>
                                    );
                                })}
                            </Flex>
                        </Flex>
                        <Flex alignItems="center">
                            <Box mr="5" display={["none", "none", "none", "block"]}>
                                <TelegramButton />
                            </Box>
                            <Box>
                                <ToggleModeButton />
                            </Box>
                        </Flex>
                    </Flex>
                </Container>
            </Box>
        </motion.div>
    );
}

export default Navbar;