import React from 'react';
import Link from 'next/link';
import { Text, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';

const Logo = () => {
    const authorNameColor = useColorModeValue('gray.500', 'gray.500');

    return (
        <Link href="/">
            <ChakraLink _hover={{ textDecoration: "none" }}>
                <Text color="green.400" textTransform="uppercase" fontWeight="bold" fontSize={['md', 'md', 'xl']}>
                    karardzhikov.dev
                </Text>
                <Text fontSize={["sm", "sm", "md"]} color={authorNameColor}>
                    александр караджиков
                </Text>
            </ChakraLink>
        </Link>
    );
}

export default Logo;