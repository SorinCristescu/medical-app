import { Flex, useColorMode } from '@chakra-ui/react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'gray.50', dark: 'gray.900' };

  const color = { light: 'black', dark: 'white' };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    >
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </Flex>
  );
};

export default Layout;
