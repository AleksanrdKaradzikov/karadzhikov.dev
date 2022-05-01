import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Chakra } from '../src/components/Chakra';
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

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <MainLayout>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={onExitComplete}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </Chakra>
  );
}

export default MyApp
