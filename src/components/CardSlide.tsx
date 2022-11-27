import { Flex, Text } from '@chakra-ui/react';

interface CardSlideProps {
  backgroundImage: string;
  title: string;
  description: string;
}

const CardSlide = ({ backgroundImage, title, description }: CardSlideProps) => {
  return (
    <Flex
      position="relative"
      align="center"
      justify="center"
      backgroundImage={backgroundImage}
      width="93%"
      height="450px"
      mx="auto"
      my="6"
    >
      <Flex align="center" justify="center" direction="column">
        <Text as="h2" fontWeight="bold" fontSize={{ base: '24px', lg: '48' }} color="light.700">
          {title}
        </Text>
        <Text as="p" fontWeight="bold" fontSize={{ base: '14px', lg: '24' }} color="light.300">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CardSlide;
