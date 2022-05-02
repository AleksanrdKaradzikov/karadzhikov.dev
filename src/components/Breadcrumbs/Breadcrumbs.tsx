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
    dinamicParams?: Record<string, string>;
    breadcrumbs: { path: string, label: string; isRoot?: boolean }[];
}

const Breadcrumbs: FC<Props> = ({ dinamicParams = {}, breadcrumbs }) => {
    const bg = useColorModeValue('bg.headerBgLight', 'bg.headerBgDark');
    const renderBreadcrumbs = useRef(breadcrumbs);

    return (
        <Box
            bg={bg}
            boxShadow="base"
            borderRadius="6px"
            p="2"
        >
            <Breadcrumb separator='/'>
                {renderBreadcrumbs.current.map(({ label, path, isRoot }) => {
                    let renderLabel = label;
                    let renderHref = path;

                    if (renderLabel.startsWith('[')) {
                        const regExp = /\w+/g;

                        renderLabel = renderLabel.replace(regExp, function (param) {
                            const dinamicPath = dinamicParams[param];
                            return dinamicParams[dinamicPath];
                        }).replace('[', '').replace(']', '');

                        renderHref = renderHref.replace(regExp, function (word) {
                            if (dinamicParams[word]) {
                                return dinamicParams[word]
                            }
                            return word;
                        }).replace('[', '').replace(']', '');
                    }

                    return (
                        <BreadcrumbItem key={path}>
                            {isRoot ? (
                                <Text d="inline-block" fontWeight="500" userSelect="none">{renderLabel}</Text>
                            ) : (
                                <Link href={renderHref}>
                                    <BreadcrumbLink color="green.400">
                                        {renderLabel}
                                    </BreadcrumbLink>
                                </Link>
                            )}
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumb >
        </Box >
    )
};

export default Breadcrumbs;