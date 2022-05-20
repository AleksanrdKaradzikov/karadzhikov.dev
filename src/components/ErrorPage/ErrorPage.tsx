import { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Heading, Flex, Button } from '@chakra-ui/react';
import { Layout } from '../Layouts/AnimateLayout';

const ErrorPage: FC = () => {
    const router = useRouter();

    const handleReload = () => {
        router.reload();
    };

    const handleHome = () => {
        router.push('/');
    };

    return (
        <Layout title="500">
            <Box h="100%" d="flex" alignItems="center" justifyContent="center">
                <Box>
                    <Heading mb="20px">Что-то пошло не так...</Heading>
                    <Flex>
                        <Button mr="20px" onClick={handleReload} colorScheme="green">
                            Перезагрузить страницу
                        </Button>
                        <Button onClick={handleHome} colorScheme="green" variant="outline">
                            Вернуться на главную
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Layout>
    );
}

export default ErrorPage;