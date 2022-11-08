import "../styles/globals.css";

import type { AppProps } from "next/app";
import DefaultLayout from "../components/layout";
import { SessionProvider } from 'next-auth/react'
import { NextPage } from "next";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // console.log("App",Component);
  const { isInLayout } = Component as (NextPage & {isInLayout?:boolean}) ;
  return (
    <SessionProvider session={session}>
      {!isInLayout &&
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      }
      {isInLayout && <Component {...pageProps} />}
    </SessionProvider>
  );
}
