import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "typeface-roboto";
import "typeface-antic-didone";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
