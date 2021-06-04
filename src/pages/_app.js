import '../css/style.css';
import '../css/form.css';
import { Provider as AuthProvider } from 'next-auth/client';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from '../css/theme';

import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <AuthProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
