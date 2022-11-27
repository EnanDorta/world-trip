import { Header } from '../components/Header';
import { Box, Flex, Image, Text, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import CardCity from '../components/CardCity';
import Cards_Data from '../data/countrys-mock.json';

const Europa = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <>
      <Box bg="light.700">
        <Header.Root>
          <Header.BackButton pathImg="images/backButton.svg" altImg="Botão de voltar" />
          <Header.Image pathImg="images/headerImg.svg" altImg="Logo" />
        </Header.Root>
        <Flex
          display="flex"
          height={['150px', '500px']}
          margin="0 auto"
          backgroundRepeat="no-repeat"
          alignItems={['center', 'flex-end']}
          width="90%"
          bgColor="light.700"
          backgroundImage={['images/europeMobile.png', 'images/europaImg.svg']}
        >
          <Text as="h2" color="white" fontSize={['28px', '48px']} fontWeight="semibold" mb="48px" ml="140px" zIndex={1}>
            {' '}
            Europa{' '}
          </Text>
        </Flex>
        <Box bgColor="light.700" mt="24px">
          <Flex
            alignItems="center"
            justifyContent={['center', 'flex-start']}
            flexDirection={['column', 'row']}
            bgColor="light.700"
            mx="auto"
            my={['24px', '80px']}
            width={['100%', '80%']}
            gap={['20px', '70px']}
          >
            <Text
              as="p"
              color="dark.700"
              width={['343px', '600px']}
              height={['146px', '234px']}
              textAlign="justify"
              fontSize={['sm', '2xl']}
            >
              A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da
              Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio
              Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>
            <Flex display="flex" alignItems="center" gap="42px">
              <Flex display="flex" flexDirection="column">
                <Text fontSize={['2xl', '5xl']} as="h2" fontWeight="semibold" color="yellow.900">
                  50
                </Text>
                <Text fontSize={['lg', '2xl']} fontWeight={['normal', 'semibold']} color="dark.700">
                  países
                </Text>
              </Flex>
              <Flex display="flex" flexDirection="column">
                <Text fontSize={['2xl', '5xl']} as="h2" fontWeight="semibold" color="yellow.900">
                  60
                </Text>
                <Text fontSize={['lg', '2xl']} fontWeight={['normal', 'semibold']} color="dark.700">
                  línguas
                </Text>
              </Flex>
              <Flex display="flex" flexDirection="column">
                <Text fontSize={['2xl', '5xl']} as="h2" fontWeight="semibold" color="yellow.900">
                  27
                </Text>
                <Text
                  display="flex"
                  alignItems="center"
                  gap="5px"
                  fontSize={['lg', '2xl']}
                  fontWeight={['normal', 'semibold']}
                  color="dark.700"
                >
                  cidades +100
                  <Image src="images/info.svg" alt="info" />
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Box w={['300px', '1160px']} bgColor="light.700" h="750" margin="0 auto">
            <Text as="h2" color="dark.700" fontSize={['2xl', '4xl']} fontWeight="medium" mb="48px">
              Cidades + 100
            </Text>
            {isMobile ? (
              <Flex alignItems="flex-end" justifyContent="center" flexDirection="column" gap="20px">
                {Cards_Data.map(
                  ({ altIconCard, altImgCard, nameCity, nameCountry, srcIconCard, srcImgCard }, index) => (
                    <CardCity
                      key={index}
                      nameCity={nameCity}
                      nameCountry={nameCountry}
                      srcImgCard={srcImgCard}
                      srcIconCard={srcIconCard}
                      altIconCard={altIconCard}
                      altImgCard={altImgCard}
                    />
                  )
                )}
              </Flex>
            ) : (
              <>
                <SimpleGrid gridTemplateColumns="256px 256px 256px 256px" gap="45px">
                  {Cards_Data.map(
                    ({ altIconCard, altImgCard, nameCity, nameCountry, srcIconCard, srcImgCard }, index) => (
                      <CardCity
                        key={index}
                        nameCity={nameCity}
                        nameCountry={nameCountry}
                        srcImgCard={srcImgCard}
                        srcIconCard={srcIconCard}
                        altIconCard={altIconCard}
                        altImgCard={altImgCard}
                      />
                    )
                  )}
                </SimpleGrid>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Europa;
