import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Heading, Link as ChakraLink, useColorModeValue, Text } from '@chakra-ui/react';
import { translations } from '../../constants/translations';

const Logo = () => {
    const { locale } = useRouter();
    const authorNameColor = useColorModeValue('gray.500', 'gray.500');

    return (
        <Link href="/">
            <ChakraLink _hover={{ textDecoration: "none" }}>
                <Heading color="green.400" textTransform="uppercase" fontWeight="bolder" fontSize={['md', 'md', 'xl']}>
                    karardzhikov.dev
                </Heading>
                <Text fontSize={["sm", "sm", "md"]} color={authorNameColor}>
                    {translations[locale as 'ru'].author.toLocaleLowerCase()}
                </Text>
            </ChakraLink>
        </Link>
    );
}

export default Logo;