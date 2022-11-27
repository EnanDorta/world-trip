import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Box, Flex, Img, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react';
import { Slider, SliderProps, Slide } from '../components/Slider';
import Cards_Slide from '../../src/data/components-mock.json';
import { Header } from '../components/Header';
import CardSlide from '../components/CardSlide';

const Home: NextPage = () => {
  const router = useRouter();

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  // useEffect(() => {
  //   const isMobile = {
  //     base: true,
  //     lg: false,
  //   }
  //   console.log(isMobile)
  // }, [])

  const settings: SliderProps = {
    preventClicksPropagation: false,
    preventClicks: false,
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

  function handleOpenCountry(href: string) {
    router.push(href);
  }

  return (
    <Box height="100vh" width="auto">
      <Header.Root>
        <Header.Image pathImg="images/headerImg.svg" altImg="Logo" />
      </Header.Root>

      {isMobile ? (
        <>
          <Box
            width="100%"
            padding="28px 0 28px 16px"
            height={163}
            backgroundImage="images/Background.svg"
            backgroundRepeat="no-repeat"
            bgSize="unset"
          >
            <Text as="h1" paddingBottom={15} fontSize="2xl">
              5 Continentes, <br /> infinitas possibilidades.
            </Text>
            <Text as="p" fontSize="14px" color="rgba(153, 153, 153, 0.8)">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
            </Text>
          </Box>
          <SimpleGrid columns={2} spacing={5} width={'80%'} mx="auto" my="36px">
            <Flex alignItems="center" gap="5px">
              <Box as="span" bg="yellow.900" borderRadius="50%" w="8px" height="8px" />
              <Text fontSize="18px" color="dark.700" textAlign="center" fontWeight="medium">
                vida noturna
              </Text>
            </Flex>

            <Flex alignItems="center" gap="5px">
              <Box as="span" bg="yellow.900" borderRadius="50%" w="8px" height="8px" />
              <Text fontSize="18px" color="dark.700" textAlign="center" fontWeight="medium">
                praia
              </Text>
            </Flex>
            <Flex alignItems="center" gap="5px">
              <Box as="span" bg="yellow.900" borderRadius="50%" w="8px" height="8px" />
              <Text fontSize="18px" color="dark.700" textAlign="center" fontWeight="medium">
                moderno
              </Text>
            </Flex>
            <Flex alignItems="center" gap="5px">
              <Box as="span" bg="yellow.900" borderRadius="50%" w="8px" height="8px" />
              <Text fontSize="18" color="dark.700" textAlign="center" fontWeight="medium">
                clássico
              </Text>
            </Flex>
            <Flex alignItems="center" gap="5px">
              <Box as="span" bg="yellow.900" borderRadius="50%" w="8px" height="8px" />
              <Text fontSize="18px" color="dark.700" textAlign="center" fontWeight="medium">
                e mais...
              </Text>
            </Flex>
          </SimpleGrid>
          <Text borderBottom="2px" color="dark.700" w="90px" mx="auto" />
          <Box mt="50" w="85%" mx="auto">
            <Text as="h2" textAlign="center" color="dark.700" fontWeight="medium" fontSize="20px" lineHeight="54px">
              Vamos nessa? <br /> Então escolha seu continente
            </Text>
          </Box>
          <Box width="375px" height="250px" my="24px">
            <Slider settings={settings}>
              {Cards_Slide.map(({ title, description, backgroundImage }, index) => (
                <Slide onClick={() => handleOpenCountry(`http://localhost:3000/${title}`)} key={index}>
                  <CardSlide title={title} description={description} backgroundImage={backgroundImage} />
                </Slide>
              ))}
            </Slider>
          </Box>
        </>
      ) : (
        <>
          <Box
            width="100%"
            height={335}
            backgroundImage="images/Background.svg"
            backgroundRepeat="no-repeat"
            bgSize="unset"
          >
            <SimpleGrid columns={2} spacing={5}>
              <Flex align="center" direction="column" justify="center">
                <Box>
                  <Text as="h1" paddingBottom={15} fontSize="3xl">
                    5 Continentes, <br /> infinitas possibilidades.
                  </Text>
                  <Text as="p" w={480}>
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
                  </Text>
                </Box>
              </Flex>
              <Box mt="20" alignSelf="self-end">
                <Img src="images/airplane.svg" alt="imagem avião" />
              </Box>
            </SimpleGrid>
          </Box>
          <Flex>
            <Flex align="center" justify="space-evenly" w="80%" marginY="20" mx="auto">
              <Box>
                <Img src="images/cocktail.svg" alt="taça de cocktail" />
                <Text as="p" mt="24px" color="dark.700" textAlign="center" fontWeight="semibold">
                  vida noturna
                </Text>
              </Box>
              <Box>
                <Img src="images/surf.svg" alt="Surf" />
                <Text as="p" mt="24px" color="dark.700" textAlign="center" fontWeight="semibold">
                  praia
                </Text>
              </Box>
              <Box>
                <Img src="images/building.svg" alt="Prédio empresarial" />
                <Text as="p" mt="24px" color="dark.700" textAlign="center" fontWeight="semibold">
                  moderno
                </Text>
              </Box>
              <Box>
                <Img src="images/museum.svg" alt="Museum" />
                <Text as="p" mt="24px" color="dark.700" textAlign="center" fontWeight="semibold">
                  clássico
                </Text>
              </Box>
              <Box>
                <Img src="images/earth.svg" alt="Terra" />
                <Text as="p" mt="24px" color="dark.700" textAlign="center" fontWeight="semibold">
                  e mais...
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Text borderBottom="2px" color="dark.700" w="90px" mx="auto" />
          <Box mt="50" w="50%" mx="auto">
            <Text as="h2" textAlign="center" color="dark.700" fontSize="36px" lineHeight="54px">
              Vamos nessa? <br /> Então escolha seu continente
            </Text>
          </Box>
          <Box width="93%" height="450px" mx="auto" my="6">
            <Slider settings={settings}>
              {Cards_Slide.map(({ title, description, backgroundImage }, index) => (
                <Slide onClick={() => handleOpenCountry(`http://localhost:3000/${title}`)} key={index}>
                  <CardSlide title={title} description={description} backgroundImage={backgroundImage} />
                </Slide>
              ))}
            </Slider>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Home;
