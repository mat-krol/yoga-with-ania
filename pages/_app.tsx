import { ChakraProvider } from "@chakra-ui/react";
import "typeface-antic-didone";
import "typeface-roboto";

import { theme } from "../src/common/theme";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
