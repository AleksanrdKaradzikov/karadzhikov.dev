import React, { FC } from 'react';
import NextLink from 'next/link';
import { Flex, Tag, TagLabel, Link, Box } from '@chakra-ui/react';
import { Category } from '../../models';

interface TagItemProps {
    size?: "sm" | 'md' | 'lg',
    label: string;
}

interface TagListProps {
    items: Category[];
    initialPath?: string;
}

export const TagItem: FC<TagItemProps> = ({ size = "lg", label }) => {
    return (
        <Tag
            borderBottom="2px solid transparent"
            transition="border-color .3s ease"
            _hover={{ borderColor: "green.400" }}
            size={size}
            variant='subtle'
            colorScheme='green'
            fontWeight="600"
            borderRadius="2px"
            fontSize="12px"
            whiteSpace="nowrap"
            textTransform="uppercase"
        >
            <TagLabel>{label}</TagLabel>
        </Tag>
    );
}

export const TagList: FC<TagListProps> = ({
    items,
    initialPath = '/blog/category',
}) => {
    return (
        <Flex as="ul" listStyleType="none" flexWrap="wrap" gap="5px">
            {items.map(({ name, slug }) => {
                return (
                    <Box key={slug} as="li">
                        <NextLink
                            href={`${initialPath}/[slug]`}
                            as={`${initialPath}/${slug}`}
                            passHref
                        >
                            <Link
                                _hover={{ textDecoration: 'none' }}
                                _active={{ boxShadow: 'none' }}
                                _focus={{ boxShadow: 'none' }}
                            >
                                <TagItem label={name} />
                            </Link>
                        </NextLink>
                    </Box>
                );
            })}
        </Flex >
    );
}