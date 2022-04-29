import type { AppProps } from 'next/app'
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import { Navbar } from '../src/components/Navbar';
import { theme } from '../src/constants/theme';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box as="main" pt={['60px', '60px', '80px']}>
        <Container maxW="container.xl">
          <Component {...pageProps} />
        </Container >
      </Box>
    </ChakraProvider>
  );
}

export default MyApp
