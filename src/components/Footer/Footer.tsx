import React from 'react';
import {
    Grid,
    Box,
    GridItem,
    Container,
    Text,
    Link,
    Tooltip,
    useColorMode
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faVk, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { vk, telegram, github } from '../../constants/contacts';

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
    const { colorMode } = useColorMode();

    return (
        <Box
            as="footer"
            py="60px"
            mt="auto"
            minHeight="50px"
            width="100%"
        >
            <Container maxWidth="container.xl">
                <Grid
                    gridTemplateColumns={{
                        base: '1fr',
                        md: '1fr',
                        lg: '1fr 1fr',
                    }}
                >
                    <GridItem
                        textAlign={{ base: 'center', md: 'center', lg: 'left' }}
                        mb={{ base: '20px', md: '20px', lg: 0 }}>
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
                    </GridItem>
                    <GridItem display="flex" justifyContent={{ base: 'center', md: 'center', lg: 'flex-end' }}>
                        {links.map(({ href, icon, lightColor, darkColor, label }) => {
                            return (
                                <Box
                                    _hover={{ transform: 'scale(1.2)' }}
                                    color={colorMode === 'dark' ? darkColor : lightColor}
                                    key={label}
                                    transition="transform .3s ease"
                                    fontSize="30px"
                                    ml="5"
                                >
                                    <Tooltip label={label} placement="top">
                                        <Link href={href} target="blank">
                                            <FontAwesomeIcon icon={icon} />
                                        </Link>
                                    </Tooltip>
                                </Box>
                            );
                        })}
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;