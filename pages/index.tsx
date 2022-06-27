import { NextPage } from 'next'
import { GridItem, Grid, Text, Heading, Img, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation'
import { Layout } from '../src/components/Layouts/AnimateLayout'
import { HomePreviewPosts } from '../src/components/HomePreviewPosts';
import { WorksSection } from '../src/components/WorksSection';
import { SkillsSection } from '../src/components/SkillsSection';
import { staticTitles } from '../src/constants/routes';
import homeAvatar from '../public/images/home-avatar.jpg';

const Home: NextPage = () => {
  const { t } = useTranslation('home');
  const { locale } = useRouter();

  return (
    <Layout title={staticTitles(locale as 'ru').home}>
      <Grid
        gap={6}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
          lg: 'repeat(3, 1fr)'
        }}
        py="20"
      >
        <GridItem
          boxShadow='dark-lg'
          transition="transform .3s ease"
          _hover={{ transform: 'scale(1.02)' }}
          userSelect="none"
          rowSpan={2}
          display={{ base: 'none', md: 'none', lg: 'block' }}
          position="relative"
          maxWidth="380px"
          borderRadius="2xl"
          overflow="hidden"
        >
          <Img
            src={homeAvatar.src}
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </GridItem>
        <GridItem
          textAlign={{
            base: 'center',
            md: 'center',
            lg: 'left'
          }}
          colSpan={{
            base: 1,
            md: 1,
            lg: 2,
          }}>
          <Text fontSize='5xl' fontWeight="500">
            {t('me')}
          </Text>
          <Heading
            as='h1'
            size='3xl'
            letterSpacing="3px"
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontWeight='black'
            mb="10"
          >
            {t('title')}
          </Heading>
          <Text fontSize="md" mb="3">
            {t('about_one')}
          </Text>
          <Text fontSize="md">
            {t('about_two')}
          </Text>
        </GridItem>
      </Grid>
      <Box pb="10">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vitae maiores iste aliquam accusantium, consequatur laudantium iure, eaque odio, pariatur eligendi possimus exercitationem iusto aperiam repudiandae debitis expedita fuga corrupti.
        </Text>
      </Box>
      <SkillsSection />
      <WorksSection />
      <HomePreviewPosts />
    </Layout>
  )
}

export default Home;
