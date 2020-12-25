import type { AppProps } from "next/app";
import { Normalize } from "styled-normalize";
import { Reset } from "styled-reset";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <Reset />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
