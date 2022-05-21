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
    exitKey?: string;
}

const Layout: FC<Props> = ({ children, title, exitKey }) => {
    let ttl = `${title} - Karadzhikov.dev`;
    const { pathname } = useRouter();

    return (
        <>
            {title && (
                <Head>
                    <title>{ttl}</title>
                </Head>
            )}
            <motion.div
                key={exitKey || pathname}
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.4, type: 'easeInOut' }}
                style={{ position: 'relative', height: '100%' }}
            >
                {children}
            </motion.div>
        </>
    );
}

export default Layout;
