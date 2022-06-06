import { createContext, useContext, useEffect } from 'react';
import { AppProps, AppContext } from 'next/app'
import NextNProgress from "nextjs-progressbar";
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Error from './_error';
import { Chakra } from '../src/components/Chakra';
import { fetchAPI } from '../src/services/strapiApi';
import { MainLayout } from '../src/components/Layouts/MainLayout';
import { Fonts } from '../src/components/Fonts';
import * as gtag from '../src/helpers/gtag';
import '../styles/globals.css'

config.autoAddCss = false;

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
  const { global = {}, err } = pageProps;

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    const handleRouteChange = (url: string) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        gtag.pageview(url, document.title);
      }, 100);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      clearTimeout(timerId);
    };
  }, []);

  return (
    <Chakra cookies={pageProps.cookies}>
      <NextNProgress color="#48BB78" showOnShallow={false} />
      <Fonts />
      <StrapiApiGlobalContext.Provider value={global?.attributes ?? {}}>
        <MainLayout>
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={onExitComplete}
          >
            {err ?
              <Error statusCode={500} />
              :
              <Component {...pageProps} key={router.route} />
            }
          </AnimatePresence>
        </MainLayout>
      </StrapiApiGlobalContext.Provider>
    </Chakra >
  );
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  try {
    const globalRes = await fetchAPI("/global", {
      populate: {
        favicon: "*",
        defaultSeo: {
          populate: "*",
        },
      },
    });
    // Pass the data to our page via props
    return {
      ...appProps,
      pageProps: {
        global: globalRes.data,
        ...appProps.pageProps
      }
    };
  } catch {
    return {
      ...appProps,
      pageProps: {
        ...appProps.pageProps,
        err: true,
      }
    }
  }
}

export default MyApp;
