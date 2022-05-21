import type { NextPage } from 'next'
import Link from 'next/link';
import { GridItem, Grid, Text, Heading, Img, Box, Link as ChakraLink } from '@chakra-ui/react';
import { Layout } from '../src/components/Layouts/AnimateLayout'
import homeAvatar from '../public/images/home-avatar.jpg';

const Home: NextPage = () => {
  return (
    <Layout title="Главная">
      <Grid 
        gap={6}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
          lg: 'repeat(3, 1fr)'
        }}
        p="100px 0 160px"
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
            Александр Караджиков
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
            Fronted Developer
          </Heading>
          <Text fontSize="md" mb="3">
            Добро пожаловать! Меня зовут Александр Караджиков, я занимаюсь frontend-ом уже более 3 лет,
            я постоянно развиваюсь в данном направлении и интересуюсь новыми трендами и технологиями.
          </Text>
          <Text fontSize="md">
            Здесь вы сможете ознакомится с моими работами, так же я виду небольшой блог на различные темы в сфере IT,
            а так же рассказываю о своей жизни, приятного просмотра!
          </Text>
        </GridItem>
      </Grid>
      <Box id="articles">
        <Link href="/#articles">
          <Heading
            color="green.400"
            mb="5"
            cursor="pointer"
            _hover={{
              '& .anchorLink': {
                opacity: '1'
              }
            }}
          >
            Последние статьи
            <ChakraLink
              ml="3"
              className="anchorLink"
              opacity="0"
              _hover={{ textDecoration: 'none' }}
            >
              #
            </ChakraLink>
          </Heading>
        </Link>
        <Text>
          Недавние публикации из моего блога, вы так же можете ознакомится с другими {' '}
          <Link href="/blog">
            <ChakraLink color="teal.500">
              статьями
            </ChakraLink>
          </Link>
        </Text>
      </Box>
    </Layout>
  )
}

export default Home
