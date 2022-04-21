import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    beige: {
      50: "#f7efec",
      700: "#805E6B",
    },
  },
  styles: {
    global: () => ({
      body: {
        backgroundColor: "beige.50",
        fontFamily: "Roboto",
        color: "beige.700",
      },
      h1: {
        fontFamily: "Antic Didone",
      },
      h2: {
        fontFamily: "Antic Didone",
      },
      h3: {
        fontFamily: "Antic Didone",
      },
    }),
  },
});
