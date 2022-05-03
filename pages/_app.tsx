import { createContext, useContext } from 'react';
import { AppProps, AppContext } from 'next/app'
import App from 'next/app';
import { AnimatePresence } from 'framer-motion'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Chakra } from '../src/components/Chakra';
import { fetchAPI } from '../src/services/strapiApi';
import { MainLayout } from '../src/components/Layouts/MainLayout';
import { Fonts } from '../src/components/Fonts';
import '../styles/globals.css'

config.autoAddCss = false

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

const onExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
};

type StrapiApiGlobalContext = Record<string, any>;

const StrapiApiGlobalContext = createContext<StrapiApiGlobalContext>({});

export function useStrapiApiGlobalContext() {
  const context = useContext(StrapiApiGlobalContext);
  return context;
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const { global } = pageProps;

  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <StrapiApiGlobalContext.Provider value={global.attributes}>
        <MainLayout>
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={onExitComplete}
          >

            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MainLayout>
      </StrapiApiGlobalContext.Provider>
    </Chakra>
  );
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
}

export default MyApp
