import React from 'react';
import { useRouter } from 'next/router';
import {
    Box,
    Container,
    Text,
    Link,
    Tooltip,
    Heading,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faVk, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { vk, telegram, github } from '../../constants/contacts';
import { HOME, ABOUT, WORKS } from '../../constants/routes';
import { WorkFormMe } from './WorkFormMe';

const PAGES = [HOME, ABOUT, WORKS];

const links = [
    {
        href: telegram,
        icon: faTelegram,
        lightColor: 'bg.telegramBg',
        darkColor: 'white',
        label: 'Телеграм',
    },
    {
        href: vk,
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
        href: github,
        icon: faGithub,
        lightColor: 'black',
        darkColor: 'white',
        label: 'Github',
    }
];

const Footer = () => {
    const router = useRouter();

    const isShowWorkMeBlock = PAGES.includes(router.pathname);

    return (
        <Box
            as="footer"
            pb="60px"
            pt={isShowWorkMeBlock ? 0 : '60px'}
            mt="auto"
            minHeight="50px"
            width="100%"
            bg="bg.footerBg"
            color="white"
        >
            {isShowWorkMeBlock && (
                <WorkFormMe />
            )}
            <Container
                maxW="container.xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Heading color="white" mb="10" fontSize="xl" textTransform="uppercase">
                    Karadzhikov.dev
                </Heading>
                <Box display="flex" alignItems="center" mb="10">
                    {links.map(({ href, icon, lightColor, darkColor, label }) => {
                        return (
                            <Box
                                _hover={{ transform: 'scale(1.2)' }}
                                // color={colorMode === 'dark' ? darkColor : lightColor}
                                color="white"
                                key={label}
                                transition="transform .3s ease"
                                fontSize="30px"
                                ml="5"
                            >
                                <Tooltip label={label} placement="top" offset={[0, 25]} openDelay={.5}>
                                    <Link href={href} target="blank">
                                        <FontAwesomeIcon icon={icon} fontSize="40px" />
                                    </Link>
                                </Tooltip>
                            </Box>
                        );
                    })}
                </Box>
                <Box textAlign="center" color="gray.300">
                    <Text>Дизайн и разработка Александра Караджикова</Text>
                    <Text>
                        Copyrighting © {new Date().getFullYear()}. Построен с {' '}
                        <Link
                            target="blank"
                            color="teal.500"
                            href="https://nextjs.org/"
                        >
                            Next.js
                        </Link>
                    </Text>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;