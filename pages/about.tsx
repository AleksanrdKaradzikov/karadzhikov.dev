import { Box, Heading, Text, Tag, TagLabel } from '@chakra-ui/react';
import Image from 'next/image';
import { Layout } from "../src/components/Layouts/AnimateLayout";
import { staticTitles } from '../src/constants/routes';

const skils = ['React', 'Next.js', 'JavaScript', 'SASS/SCSS', 'Redux', 'Git', 'Node.js', 'Express.js'];

const AboutPage = () => {
    return (
        <Layout title={staticTitles.about}>
            <Box pt="32px">
                <Heading color="green.400" mb="5" textAlign="center" fontSize="6xl">
                    Обо мне
                </Heading>
                <Box display="flex" justifyContent="center" my="10">
                    <Image
                        width={350}
                        height={350}
                        src="/images/about.jpg"
                        style={{
                            borderRadius: '50%',
                        }}
                    />
                </Box>
                <Text wordBreak="break-word" fontSize="xl" lineHeight="2rem">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quidem mollitia dolorem laboriosam minima reprehenderit quas sunt eaque asperiores nesciunt, cum cupiditate labore soluta, eligendi, facilis non pariatur saepe natus debitis distinctio delectus dolorum. Dolore tenetur necessitatibus nihil praesentium nostrum sunt quos repellendus. Amet dolore maxime sunt nostrum minus corrupti.
                </Text>
                <Heading color="green.400" my="10">
                    Навыки
                </Heading>
                <Box display="flex" flexWrap="wrap" columnGap="10px" rowGap="5px">
                    {skils.map((item) => (
                        <Tag key={item} w="auto" h="40px" fontSize="lg" colorScheme="green" boxShadow="base">
                            <TagLabel>
                                {item}
                            </TagLabel>
                        </Tag>
                    ))}
                </Box>
                <Text wordBreak="break-word" fontSize="xl" lineHeight="2rem" my="10">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quidem mollitia dolorem laboriosam minima reprehenderit quas sunt eaque asperiores nesciunt, cum cupiditate labore soluta, eligendi, facilis non pariatur saepe natus debitis distinctio delectus dolorum. Dolore tenetur necessitatibus nihil praesentium nostrum sunt quos repellendus. Amet dolore maxime sunt nostrum minus corrupti.
                </Text>
                <Box>
                    {[...new Array(3)].map((_, idx) => (
                        <Box
                            pl="2.5rem"
                            key={idx}
                            position="relative"
                            _before={{
                                content: '""',
                                display: "block",
                                position: 'absolute',
                                width: '24px',
                                height: '24px',
                                borderRadius: "50%",
                                bg: 'green.400',
                                top: '8px',
                                left: 0,
                            }}
                            _after={{
                                content: '""',
                                display: idx === 2 ? 'none' : "block",
                                position: 'absolute',
                                height: "100%",
                                width: "2px",
                                top: '12px',
                                left: '12px',
                                bg: 'green.400'
                            }}
                        >
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                mb="5"
                            >
                                <Box>
                                    <Heading color="green.400" mb="2">
                                        Luxoft
                                    </Heading>
                                    <Text fontSize="xl" fontWeight="600">
                                        Software Engineer
                                    </Text>
                                </Box>
                                <Box px="5" py="2" borderRadius="6px" bg="green.400" color="white">
                                    Date here
                                </Box>
                            </Box>
                            <Box pb="10">
                                <Text fontSize="xl">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ex repellat porro ipsa molestias libero impedit obcaecati consequuntur eum quibusdam, ducimus rem? Quae tempora harum delectus nobis, dignissimos eveniet possimus repellendus a aperiam enim obcaecati laudantium non nulla minima adipisci placeat magnam labore veniam quisquam vero debitis perspiciatis suscipit dolorum.
                                </Text>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Layout >
    );
}

export default AboutPage;