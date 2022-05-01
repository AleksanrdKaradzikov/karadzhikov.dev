import React from 'react';
import Link from 'next/link';
import { Heading, Link as ChakraLink, useColorModeValue, Text } from '@chakra-ui/react';

const Logo = () => {
    const authorNameColor = useColorModeValue('gray.500', 'gray.500');

    return (
        <Link href="/">
            <ChakraLink _hover={{ textDecoration: "none" }}>
                <Heading color="green.400" textTransform="uppercase" fontWeight="bolder" fontSize={['md', 'md', 'xl']}>
                    karardzhikov.dev
                </Heading>
                <Text fontSize={["sm", "sm", "md"]} color={authorNameColor}>
                    александр караджиков
                </Text>
            </ChakraLink>
        </Link>
    );
}

export default Logo;