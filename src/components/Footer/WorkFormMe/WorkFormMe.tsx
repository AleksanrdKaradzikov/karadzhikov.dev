import {
    Box,
    Text,
    Container
} from '@chakra-ui/react';

export const WorkFormMe = () => {
    return (
        <Container
            pb="30px"
            maxWidth="container.xl"
        >
            <Box
                position="relative"
                py="40px"
                px="20px"
                bg="#141c3a"
                mx="auto"
                top='-60px'
                borderRadius="26px"
                boxShadow="base"
                display="flex"
                columnGap="20px"
                rowGap="20px"
                flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
                justifyContent={{ base: 'center', md: 'center', lg: 'space-between' }}
                alignItems="center"
            >
                <Box display="flex" alignItems="center" flexShrink={0} flexGrow={1} justifyContent="center">
                    <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                        Начать работать
                    </Text>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Text textAlign="center" wordBreak="break-word">
                        Заинтересованны в работе со мной? Давайте сделаем это, напишите мне
                    </Text>
                </Box>
                <Box display="flex" alignItems="center" flexShrink={0} flexGrow={1} justifyContent="center">
                    <Box
                        p="15px 25px"
                        role="button"
                        borderRadius="20px"
                        fontWeight="600"
                        border="2px solid"
                        borderColor="bg.footerBg"
                        transition="all .3s ease"
                        _hover={{ bg: 'bg.footerBg', transform: 'scale(1.1)' }}
                        color="white"
                    >
                        Давай сделаем это
                    </Box>
                </Box>
            </Box>
        </Container>
    )
};