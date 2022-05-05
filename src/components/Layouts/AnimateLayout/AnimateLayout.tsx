import React, { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, x: 0, y: -20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
}

interface Props {
    children: React.ReactNode;
    title?: string;
}

const Layout: FC<Props> = ({ children, title }) => {
    let ttl = `${title} - Karadzhikov.dev`;
    const { pathname } = useRouter();

    return (
        <motion.div
            key={pathname}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}
        >

            {title && (
                <Head>
                    <title>{ttl}</title>
                    {/* <meta name="twitter:title" content={ttl} />
                    <meta property="og:title" content={ttl} /> */}
                </Head>
            )}
            {children}
        </motion.div>
    );
}

export default Layout;
