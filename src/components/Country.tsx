import { Flex } from '@chakra-ui/react';
import Countrys from '../data/components-mock.json';

interface CountryProps {
  country: string;
}

const Country = ({ country }: CountryProps) => {
  const value = Countrys.filter((filter) => filter.title === country);
  console.log(value);
  return (
    <Flex>
      {value.map((continent) => (
        <h1 key={continent.title}>{continent.title}</h1>
      ))}
    </Flex>
  );
};

export default Country;
