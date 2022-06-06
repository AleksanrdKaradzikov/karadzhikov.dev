import React from 'react';
import { Link, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import useTranslation from 'next-translate/useTranslation'
import { telegram } from '../../constants/contacts';

const TelegramButton = () => {
    const { t } = useTranslation('common');
    return (
        <Link
            href={telegram}
            target="_blank"
            display="inline-flex"
            alignItems="center"
            minH="36px"
            minW="64px"
            borderRadius="24px"
            px="16px"
            color="white"
            bg="bg.telegramBg"
            border="1px solid blue.400"
            transition="background .3s ease"
            _hover={{ textDecoration: "none", bg: 'blue.500' }}
        >
            <FontAwesomeIcon icon={faTelegram} fontSize="25px" />
            <Text ml="2" as="span" fontSize="md">{t('telegram')}</Text>
        </Link>
    );
}

export default TelegramButton;