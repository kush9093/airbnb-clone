import "../styles/globals.css";

import type { AppProps } from "next/app";
import DefaultLayout from "../components/layout";
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps:{session,...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
    </SessionProvider>
  );
}
