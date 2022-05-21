import React, { FC } from 'react';
import Image from 'next/image';
import moment from 'moment';
import { Box, useColorModeValue, Heading, Text, Skeleton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendar, faEye } from '@fortawesome/free-solid-svg-icons';


moment.locale('ru');

interface Props {
    title: string;
    bgUrl: string;
    date: string;
    author?: string;
    children?: React.ReactNode;
    views: number;
    viewsLoading: boolean;
};

export const PagePreview: FC<Props> = ({ bgUrl, title, date, author = '', children, views, viewsLoading }) => {
    const bg = useColorModeValue('white', 'bg.headerBgDark');

    return (
        <Box
            bg={bg}
            boxShadow="base"
            p="24px"
            borderRadius="6px"
        >
            <Box
                borderRadius="6px"
                position="relative"
                overflow="hidden"
                minH={[300, 300, 400]}
                d="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Image
                    src={bgUrl}
                    layout="fill"
                    objectFit="cover"
                />
                <Box color="white" position="relative" zIndex="10" textAlign="center">
                    <Heading color="inherit" fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}>
                        {title}
                    </Heading>
                </Box>
            </Box>
            <Box
                d="flex"
                flexWrap="wrap"
                py="24px"
                borderBottomWidth="1px"
                borderBottomStyle="solid"
                borderBottomColor="green.400"
                columnGap="30px"
                rowGap="20px"
            >
                {author && (
                    <Box d="flex" alignItems="center">
                        <Box mr="20px" color="green.400">
                            <FontAwesomeIcon icon={faUser} fontSize="25px" />
                        </Box>
                        <Box>
                            <Text textTransform="uppercase" color="gray.500">
                                Автор
                            </Text>
                            <Text fontWeight="bold">
                                {author}
                            </Text>
                        </Box>
                    </Box>
                )}
                <Box d="flex" alignItems="center">
                    <Box mr="20px" color="green.400">
                        <FontAwesomeIcon icon={faCalendar} fontSize="25px" />
                    </Box>
                    <Box>
                        <Text textTransform="uppercase" color="gray.500">
                            опубликовано
                        </Text>
                        <Text fontWeight="bold">
                            {moment(date).format('DD MMMM YYYY г.')}
                        </Text>
                    </Box>
                </Box>
                <Box d="flex" alignItems="center">
                    <Box mr="20px" color="green.400">
                        <FontAwesomeIcon icon={faEye} fontSize="25px" />
                    </Box>
                    <Box>
                        <Text textTransform="uppercase" color="gray.500">
                            просмотров
                        </Text>
                        <Skeleton isLoaded={!viewsLoading}>
                            <Text fontWeight="bold">
                                {views}
                            </Text>
                        </Skeleton>
                    </Box>
                </Box>
            </Box>
            {children}
        </Box>
    );
};

export default PagePreview;