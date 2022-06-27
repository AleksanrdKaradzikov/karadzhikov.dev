import { FC } from 'react';
import Link from 'next/link';
import { Heading, Link as ChakraLink, Text } from '@chakra-ui/react';

interface Props {
    href: string;
    text: string;
};

const HrefHeading: FC<Props> = ({ href, text }) => {
    return (
        <Link href={href}>
            <Heading
                color="green.400"
                display="flex"
                alignItems="center"
                cursor="pointer"
                _hover={{
                    '& .anchorLink': {
                        opacity: '1'
                    }
                }}
            >
                <Text>{text}</Text>
                <ChakraLink
                    ml="3"
                    className="anchorLink"
                    opacity="0"
                    _hover={{ textDecoration: 'none' }}
                >
                    #
                </ChakraLink>
            </Heading>
        </Link>
    );
}

export default HrefHeading;
