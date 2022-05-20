import { useRouter } from 'next/router';
import { Box, Heading, Button } from '@chakra-ui/react';
import { Layout } from '../Layouts/AnimateLayout';

const PageNotFound = () => {
    const router = useRouter();

    const handleclick = () => {
        router.push('/');
    };

    return (
        <Layout title="404">
            <Box h="100%" d="flex" alignItems="center" justifyContent="center">
                <Box>
                    <Heading mb="20px">404 | Страница не найдена</Heading>
                    <Box d="flex" justifyContent="center">
                        <Button onClick={handleclick} variant="outline" colorScheme="green">
                            Вернуться на главную
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export default PageNotFound;
