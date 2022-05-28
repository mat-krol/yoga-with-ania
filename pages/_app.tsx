import "typeface-antic-didone";
import "typeface-roboto";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
