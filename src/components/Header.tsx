import { Box, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface HeaderRootProps {
  children: ReactNode;
}

const HeaderRoot = ({ children }: HeaderRootProps) => {
  return (
    <Flex as="header" position="relative" w="100%" p={27} bg="#fff" mx="auto" align="center" justifyContent="center">
      {children}
    </Flex>
  );
};

interface HeaderImageProps {
  pathImg: string;
  altImg: string;
}

const HeaderImage = ({ altImg, pathImg }: HeaderImageProps) => {
  return <Image src={pathImg} alt={altImg} />;
};

interface HeaderBackButtonProps {
  pathImg: string;
  altImg: string;
}

const HeaderBackButton = ({ altImg, pathImg }: HeaderBackButtonProps) => {
  return (
    <Box pos="absolute" left={['16px', '152px']}>
      <Link href={'/'} passHref>
        <Image src={pathImg} alt={altImg} />
      </Link>
    </Box>
  );
};

export const Header = {
  Root: HeaderRoot,
  Image: HeaderImage,
  BackButton: HeaderBackButton,
};
