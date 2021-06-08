import { AppProps } from 'next/app';
import '@/styles/global.css';
import { ContextProvider } from '@/context/ContextProvider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
