import "../styles/globals.css";

import type { AppProps } from "next/app";
import DefaultLayout from "../components/layout";
import { SessionProvider } from 'next-auth/react'
import { NextPage } from "next";
import { createContext } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const Appcontext = createContext({

})

export const theme = createTheme({
  palette:{
    secondary :{
      main: "#000",
    },
    primary : {
      main:"#ddd"
    }
  },
});


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // console.log("App",Component);
  const { isInLayout } = Component as (NextPage & { isInLayout?: boolean });




  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        {!isInLayout &&
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        }
        {isInLayout && <Component {...pageProps} />}
      </ThemeProvider>
    </SessionProvider>
  );
}
