import { Box } from '@chakra-ui/react';
import { HrefHeading } from '../HrefHeading';

const WorksSection = () => {
    return (
        <Box as="section" pb="20" id="portfolio">
            <HrefHeading href="/#portfolio" text="Примеры работ" />
        </Box>
    );
}

export default WorksSection;