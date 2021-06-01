import '../css/style.css';
import '../css/form.css';

import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from '../css/theme';

import Layout from '../layout';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
