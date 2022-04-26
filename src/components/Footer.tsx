import { Stack } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      paddingX={{ base: 4, lg: 8 }}
      justifyContent="center"
      paddingY={6}
    >
      <Logo />
    </Stack>
  );
}
