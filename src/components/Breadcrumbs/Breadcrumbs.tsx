import React, { FC, useRef } from 'react';
import Link from 'next/link';
import {
    Box,
    useColorModeValue,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Text,
} from '@chakra-ui/react';

interface Props {
    breadcrumbs: { path?: string; isRoot?: boolean; label: string; }[];
}

const Breadcrumbs: FC<Props> = ({ breadcrumbs }) => {
    const bg = useColorModeValue('bg.headerBgLight', 'bg.headerBgDark');
    const renderBreadcrumbs = useRef(breadcrumbs);

    return (
        <Box
            bg={bg}
            boxShadow="base"
            borderRadius="6px"
            p={{ base: '8px', md: '16px', lg: '16px' }}
        >
            <Breadcrumb separator='/'>
                {renderBreadcrumbs.current.map(({ label, path, isRoot }) => {
                    return (
                        <BreadcrumbItem key={label}>
                            {isRoot ? (
                                <Text d="inline-block" fontWeight="500" userSelect="none">{label}</Text>
                            ) : (
                                <>
                                    {path && (
                                        <Link href={path} passHref>
                                            <BreadcrumbLink
                                                color="green.400"
                                                _active={{ boxShadow: 'none' }}
                                                _focus={{ boxShadow: 'none' }}
                                            >
                                                {label}
                                            </BreadcrumbLink>
                                        </Link>
                                    )}
                                </>
                            )}
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumb >
        </Box >
    )
};

export default Breadcrumbs;