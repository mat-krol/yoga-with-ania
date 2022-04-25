import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    teal: {
      25: "#F4F8F7",
      50: "#EAF1EF",

      "100": "#60c4d4",
      "200": "#5cbacc",
      "300": "#56aab9",
      "400": "#4e95a0",
      "500": "#488188",
      "600": "#488188",
      "700": "#488188",
      "800": "#488188",
      "900": "#3d5d5f",
    },
  },
  styles: {
    global: () => ({
      body: {
        backgroundColor: "teal.50",
        fontFamily: "Roboto",
        color: "teal.500",
      },
    }),
  },
  components: {
    Button: { baseStyle: { borderRadius: 0 } },
    Input: { baseStyle: { borderRadius: 0 } },
    Heading: {
      baseStyle: {
        fontFamily: "Antic Didone",
        fontWeight: "normal",
        lineHeight: "0.95",
        letterSpacing: "-2px",
        marginY: { base: 4, lg: 0 },
      },
    },
  },
});
