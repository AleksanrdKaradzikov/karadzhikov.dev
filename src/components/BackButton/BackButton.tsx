import React, { FC } from 'react';
import { Button, Text, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface Props {
    title: string;
    onClick: () => void;
};

const BackButton: FC<Props> = ({ title, onClick }) => {
    return (
        <Button onClick={onClick} colorScheme="green" variant="outline">
            <Box as="span" mr="5px">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Box>
            <Text>
                {title}
            </Text>
        </Button>
    );
}

export default BackButton;
