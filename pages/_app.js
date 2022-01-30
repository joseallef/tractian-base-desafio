/* eslint-disable react/prop-types */
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";
import { GlobalStyle } from "../src/theme/utils/GlobalStyle";
import { ContextProvider } from "../src/components/Hooks/";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Head>
        <title>
          TRACTIAN | Monitoramento online de ativos e gestão da manutenção
        </title>
        <link rel="icon" href="https://tractian.com/tractian-favicon-ia.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextProvider>
  );
}
export default MyApp;
