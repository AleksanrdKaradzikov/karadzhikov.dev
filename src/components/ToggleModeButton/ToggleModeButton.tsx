import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { useColorMode, Button, useColorModeValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const ToggleModeButton: FC = () => {
    const { toggleColorMode } = useColorMode();
    const colorModeIcon = useColorModeValue(faMoon, faSun);

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Button
                    colorScheme={useColorModeValue('gray', 'orange')}
                    variant="ghost"
                    onClick={toggleColorMode}
                >
                    <FontAwesomeIcon icon={colorModeIcon} fontSize="20px" />
                </Button>
            </motion.div>
        </AnimatePresence >
    )
}

export default ToggleModeButton;