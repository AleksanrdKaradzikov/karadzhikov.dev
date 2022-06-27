import { Box, Tag, TagLabel } from '@chakra-ui/react';
import { HrefHeading } from '../HrefHeading';
import { skills } from '../../constants/constants';

export const Skills = () => {
    return (
        <Box display="flex" flexWrap="wrap" columnGap="10px" rowGap="10px">
            {skills.map((item) => (
                <Tag key={item} w="auto" h="40px" fontSize="lg" colorScheme="green" boxShadow="base">
                    <TagLabel>
                        {item}
                    </TagLabel>
                </Tag>
            ))}
        </Box>
    );
}

const SkillsSection = () => {
    return (
        <Box as="section" id="skills" pb="20">
            <HrefHeading href="/#skills" text="Навыки" />
            <Box mt="5">
                <Skills />
            </Box>
        </Box>
    );
}

export default SkillsSection;