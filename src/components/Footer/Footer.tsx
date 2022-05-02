import React from 'react';
import { Box, Container, Flex, Text, Link, useColorModeValue, Tooltip } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faVk, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';

const links = [
    {
        href: '#',
        icon: faTelegram,
        lightColor: 'bg.telegramBg',
        darkColor: 'white',
        label: 'Телеграм',
    },
    {
        href: '#',
        icon: faVk,
        lightColor: 'blue.500',
        darkColor: 'white',
        label: 'Vk',
    },
    {
        href: '#',
        icon: faWhatsapp,
        lightColor: 'green.500',
        darkColor: 'white',
        label: 'WhatsApp',
    },
    {
        href: '#',
        icon: faGithub,
        lightColor: 'black',
        darkColor: 'white',
        label: 'Github',
    }
];

const Footer = () => {
    return (
        <Box
            py="60px"
            mt="auto"
            minHeight="50px"
            width="100%"
        >
            <Container maxWidth="container.xl">
                <Flex justifyContent="space-between" alignItems="center">
                    <Box>
                        <Text>Дизайн и разработка Александра Караджикова</Text>
                        <Text>
                            Copyrighting © {new Date().getFullYear()}. Построен с {' '}
                            <Link
                                target="blank"
                                _active={{ boxShadow: 'none' }}
                                _focus={{ boxShadow: 'none' }}
                                color="teal.500"
                                href="https://nextjs.org/"
                            >
                                Next.js
                            </Link>
                        </Text>
                    </Box>
                    <Box display="flex">
                        {links.map(({ href, icon, lightColor, darkColor, label }) => {
                            return (
                                <Box
                                    _hover={{ transform: 'scale(1.2)' }}
                                    color={useColorModeValue(lightColor, darkColor)}
                                    key={label}
                                    transition="transform .3s ease"
                                    fontSize="30px"
                                    ml="5"
                                >
                                    <Tooltip label={label} placement="top">
                                        <Link href={href}>
                                            <FontAwesomeIcon icon={icon} />
                                        </Link>
                                    </Tooltip>
                                </Box>
                            );
                        })}
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}

export default Footer;