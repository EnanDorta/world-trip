import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface CardCityProps {
  srcImgCard: string;
  srcIconCard: string;
  nameCity: string;
  nameCountry: string;
  altImgCard: string;
  altIconCard: string;
}

const CardCity = ({ nameCity, nameCountry, srcIconCard, srcImgCard, altIconCard, altImgCard }: CardCityProps) => {
  return (
    <Flex display="flex" flexDirection="column">
      <Image src={srcImgCard} alt={altImgCard} />
      <Flex
        borderLeft="1px solid #FFBA08"
        borderRight="1px solid #FFBA08"
        borderBottom="1px solid #FFBA08"
        borderBottomLeftRadius="4px"
        borderBottomRightRadius="4px"
        alignItems="center"
        justifyContent="space-between"
        bgColor="#fff"
        pt="18px"
        pb="25px"
        px="24px"
      >
        <Box>
          <Text as="h2" fontSize="20" fontWeight="semibold" color="dark.700" pb="12px">
            {nameCity}
          </Text>
          <Text as="p" fontSize="16px" fontWeight="medium" color="dark.300">
            {nameCountry}
          </Text>
        </Box>
        <Box>
          <Image
            style={{ filter: 'drop-shadow(0 4px 4px rgba(0, 0, 0, 0.40));' }}
            src={srcIconCard}
            alt={altIconCard}
            width="30px"
            height="30px"
            borderRadius="50%"
            border="1px solid black"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default CardCity;
