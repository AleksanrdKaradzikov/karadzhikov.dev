import { Button, Checkbox, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const ToggleLanguage = () => {
    const router = useRouter();
    const { locale, pathname, asPath } = router;

    const handleChange = (param: string) => {
        router.push(pathname, asPath, { locale: param });
    };

    const label = locale === 'ru' ? 'ru' : 'en';

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<FontAwesomeIcon icon={faLanguage} fontSize="20px" />}>
                <Text fontSize="sm" textTransform="uppercase">{label}</Text>
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => handleChange('ru')}>
                    <Checkbox
                        w="100%"
                        isChecked={locale === 'ru'}
                        colorScheme="green"
                    >
                        Русский
                    </Checkbox>
                </MenuItem>
                <MenuItem onClick={() => handleChange('en')}>
                    <Checkbox
                        w="100%"
                        isChecked={locale === 'en'}
                        colorScheme="green"
                    >
                        English
                    </Checkbox>
                </MenuItem>
            </MenuList>
        </Menu>
        //null
    );
}

export default ToggleLanguage;
