import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import "typeface-roboto";
import "typeface-antic-didone";
import "../src/common/globals.css";
import { theme } from "../src/common/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
