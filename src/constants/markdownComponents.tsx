import {
    Link,
    Heading,
    UnorderedList,
    OrderedList,
    Image,
    Box,
    useColorModeValue,
} from '@chakra-ui/react';
import { Components } from 'react-markdown';

export const headingStyle = (params: any) => {
    const { children, level } = params;

    let fontSize = '4xl';

    switch (level) {
        case 1: {
            fontSize = '4xl';
            break;
        }

        case 2: {
            fontSize = '2xl';
            break;
        }

        case 3:
        case 4:
        case 5:
        case 6: {
            fontSize = 'xl';
            break;
        }

        default:
            fontSize = '4xl';
    }

    return (
        <Heading
            as={`h${level}` as any}
            mb="26px"
            fontWeight="700"
            fontSize={fontSize}
            color="green.400"
            lineHeight="1.25"
        >
            {children}
        </Heading>
    );
}

export const componentsMap: Components = {
    a: (params) => {
        const { children, href } = params;

        return (
            <Link
                href={href}
                target="_blank"
                color="teal.500"
            >
                {children}
            </Link>
        )
    },
    h1: headingStyle,
    h2: headingStyle,
    h3: headingStyle,
    h4: headingStyle,
    h5: headingStyle,
    h6: headingStyle,
    ul: (params) => {
        return (
            <UnorderedList
                listStyleType="none"
                margin="0"
                fontSize="xl"
                spacing={3}
                sx={{
                    '& li': {
                        position: 'relative',
                        pl: '25px',
                    },
                    '& li::before': {
                        content: '""',
                        position: 'absolute',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        top: "50%",
                        transform: 'translateY(-50%)',
                        left: 0,
                        display: 'block',
                        bg: 'green.400',
                    }
                }}
            >
                {params.children}
            </UnorderedList>
        );
    },
    ol: (params) => {
        return (
            <OrderedList
                listStyleType="none"
                margin="0"
                fontSize="xl"
                spacing={3}
                sx={{
                    '&': {
                        counterReset: 'ol-numbers',
                    },
                    '& li': {
                        position: 'relative',
                        padding: '0 0 0 25px',
                    },
                    '& li::before': {
                        counterIncrement: 'ol-numbers',
                        content: 'counter(ol-numbers) ")"',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        fontWeight: 700,
                        color: 'green.400',
                        textAlign: 'right',
                    }
                }}
            >
                {params.children}
            </OrderedList>
        );
    },
    img: (params) => {
        const { alt, src } = params;

        const handleClick = () => {
            window.open(src, '_blank');
        };

        return (
            <Image
                onClick={handleClick}
                _hover={{
                    cursor: 'pointer',
                    boxShadow: '1px 10px 14px 0 rgb(0, 0, 0, 51%)',
                    transform: 'translateY(-5px)',
                }}
                objectFit="cover"
                transition="all .7s ease-out"
                alt={alt}
                src={src}
                maxW="100%"
                height="auto"
                borderRadius="6px"
                maxHeight="500px"
                width="100%"
            />
        );
    },
    blockquote: (params) => {
        const bg = useColorModeValue('#f6fafe', 'transparent');

        return (
            <Box
                as="blockquote"
                p="20px"
                bg={bg}
                borderRadius="4px"
                borderWidth="1px"
                borderStyle="solid"
                borderColor="#e9f0f8"
            >
                {params.children}
            </Box>
        );
    }
};
