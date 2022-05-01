import React, { FC } from 'react';
import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react';
import { theme } from '../../constants/theme';

interface Props {
    cookies: string;
    children: React.ReactNode,
}

const Chakra: FC<Props> = ({ cookies, children }) => {
    const colorModeManager =
        typeof cookies === 'string'
            ? cookieStorageManager(cookies)
            : localStorageManager

    return (
        <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    )
};

export async function getServerSideProps({ req }: any) {
    return {
        props: {
            cookies: req.headers.cookie ?? '',
        }
    }
}

export default Chakra;