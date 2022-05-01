import { Box, Stack, Button, Text } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  src: any;
  text: string;
  isHoverable?: boolean;
};

export function TextImageCard({ src, text, isHoverable }: Props) {
  return (
    <Box
      position="relative"
      {...(isHoverable && {
        cursor: "pointer",
        _before: {
          width: "100%",
          background: "teal.800",
          height: "calc(100% - 31px)",
          content: '""',
          display: "block",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: -1,
          transition:
            "top 0.2s ease, left 0.2s ease, width 0.2s ease, height 0.2s ease",
        },
        _hover: {
          _before: {
            top: "-8px",
            left: "-8px",
            width: "calc(100% + 8px + 8px)",
            height: "calc(100% - 31px + 8px + 8px)",
          },
        },
      })}
    >
      <Box>
        <Image src={src} width="500px" height="500px" objectFit="cover" />
      </Box>

      <Text textDecoration={isHoverable ? "underline" : ""}>{text}</Text>
    </Box>
  );
}
