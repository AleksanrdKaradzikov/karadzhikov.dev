import React, { FC } from 'react';
import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import { Navbar } from '../../Navbar';
import { Footer } from '../../Footer';
import { useStrapiApiGlobalContext } from '../../../../pages/_app';
import { getStrapiMedia } from '../../../services/strapiMedia';

interface Props {
    children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
    const context = useStrapiApiGlobalContext();

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Karadzhikov Aleksandr главная" />
                <meta name="author" content="Karadzhikov Aleksandr" />
                <meta name="author" content="Karadzhikov.dev" />
                <link
                    rel="shortcut icon"
                    href={getStrapiMedia(context.favicon)}
                />
                <title>Главная - Karadzhikov.dev</title>
            </Head>
            <Box
                pt={['60px', '60px', '80px']}
                minHeight="100vh"
            >
                <Navbar />
                <Box
                    d="flex"
                    flexDirection="column"
                    minHeight={{
                        base: 'calc(100vh - 60px)',
                        md: 'calc(100vh - 60px)',
                        lg: 'calc(100vh - 80px)',
                    }}
                    w="100%"
                >
                    <Box as="main" flexGrow={1} display="flex" alignItems="stretch">
                        <Container maxW="container.xl">
                            {children}
                        </Container>
                    </Box>
                    <Footer />
                </Box >
            </Box>
        </>
    );
}

export default MainLayout;