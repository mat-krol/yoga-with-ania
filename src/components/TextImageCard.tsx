import { Box, Text } from "@chakra-ui/react";
import { StaticImageData } from "next/image";

import { LazyImage } from "./LazyImage";

type Props = {
  src: StaticImageData | string;
  text: string;
  alt: string;
  isHoverable?: boolean;
};

export function TextImageCard({ src, text, alt, isHoverable }: Props) {
  return (
    <Box
      position="relative"
      {...(isHoverable && {
        cursor: "pointer",
        _before: {
          width: "100%",
          paddingTop: "100%",
          background: "teal.800",
          content: '""',
          display: "block",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: -1,
          transition:
            "top 0.2s ease, left 0.2s ease, width 0.2s ease, padding-top 0.2s ease",
        },
        _hover: {
          _before: {
            top: "-8px",
            left: "-8px",
            width: "calc(100% + 8px + 8px)",
            paddingTop: "calc(100% + 8px + 8px)",
          },
        },
      })}
    >
      <Box>
        <LazyImage src={src} alt={alt} />
      </Box>

      <Text textDecoration={isHoverable ? "underline" : ""}>{text}</Text>
    </Box>
  );
}
