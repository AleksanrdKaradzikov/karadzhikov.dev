import Link from 'next/link';
import Image from 'next/image';
import { Box, Heading, Link as ChakraLink, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HrefHeading } from '../HrefHeading';

const images = [
    'https://evrone.ru/sites/default/files/styles/card_w1056/public/n-fields/cases/sbermarket_cover2_ru.png?itok=7AyI9UXx',
    'https://evrone.ru/sites/default/files/styles/card_w1056/public/n-fields/cases/loreal_cover_ru.png?itok=FDUtwgzb',
];

export const HomePreviewPosts = () => {
    return (
        <Box id="articles" as="section" pb="20">
            <HrefHeading href="/#articles" text="Последние статьи" />
            <Text mb="10" mt="5">
                Недавние публикации из моего блога, вы так же можете ознакомится с другими {' '}
                <Link href="/blog">
                    <ChakraLink color="teal.500">
                        статьями
                    </ChakraLink>
                </Link>
            </Text>
            <Box display="flex" flexWrap="wrap" borderRadius="6px" overflow="hidden">
                {images.map((src) => (
                    <Box flex={{ base: '0 0 100%', md: '0 0 100%', lg: '0 0 50%' }} position="relative" key={src}>
                        <ChakraLink
                            position="relative"
                            textDecoration="none"
                            display="flex"
                            alignItems="flex-end"
                            justifyContent="flex-end"
                            overflow="hidden"
                            color="white"
                            minHeight={{ base: '65vw', md: '30vw', lg: '30vw' }}
                            p={{
                                base: '24px 32px 0 32px',
                                md: '24px 32px 0 32px',
                                lg: '36px 48px 0  48px',
                            }}
                            sx={{
                                '&:hover': {
                                    '& .description': {
                                        transform: 'translateY(0)',
                                        opacity: 1,
                                    },
                                    '& .title': {
                                        transform: 'translateY(-40px)',
                                        opacity: 0,
                                    },
                                    '& .btn': {
                                        opacity: 1,
                                        transform: 'translateY(0)',
                                    },
                                    '& .preview': {
                                        transform: 'scale(1.1)',
                                    }
                                }
                            }}
                            _hover={{
                                _before: {
                                    bg: 'rgba(0, 0, 0, .6)'
                                }
                            }}
                            _before={{
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                w: '100%',
                                h: '100%',
                                transition: 'all .3s ease',
                                bg: 'transparent',
                                zIndex: 10,
                            }}
                        >
                            <Image
                                objectFit="cover"
                                src={src}
                                layout="fill"
                                className="preview"
                                style={{ transition: 'all .3s ease' }}
                            />
                            <Box
                                as="span"
                                position="absolute"
                                top={{
                                    base: '24px',
                                    md: '24px',
                                    lg: '36px',
                                }}
                                left={{
                                    base: '32px',
                                    md: '32px',
                                    lg: '36px',
                                }}
                                fontSize="4xl"
                                fontWeight="bold"
                                className="title"
                                transition="all .3s ease"
                                zIndex="15"
                            >
                                Title
                            </Box>
                            <Box
                                as="span"
                                display="block"
                                position="absolute"
                                opacity="0"
                                top={{
                                    base: '24px',
                                    md: '24px',
                                    lg: '36px',
                                }}
                                left={{
                                    base: '32px',
                                    md: '32px',
                                    lg: '36px',
                                }}
                                transform="translateY(50px)"
                                className="description"
                                transition="all .3s ease"
                                zIndex="15"
                            >
                                <Text fontSize='xl'>
                                    description
                                </Text>
                                <Text fontSize='xl' color="gray.200">
                                    Статья
                                </Text>
                            </Box>
                            <Box
                                position="relative"
                                mb={{
                                    base: '24px',
                                    md: '24px',
                                    lg: '36px',
                                }}
                                className="btn"
                                p="10px 20px"
                                borderRadius="10px"
                                border="2px solid"
                                borderColor="white"
                                zIndex="15"
                                display="flex"
                                alignItems="center"
                                opacity="0"
                                transition="all .3s ease"
                                transitionDuration=".5s"
                                transform="translateY(100px)"
                                _hover={{
                                    transform: 'scale(1.1) !important',
                                }}
                            >
                                <Text mr="5">
                                    Читать
                                </Text>
                                <FontAwesomeIcon icon={faArrowRight} fontSize="20px" />
                            </Box>
                        </ChakraLink>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
