import { Box, Heading, Stack } from "@chakra-ui/react";

export function ComingSoonView() {
  return (
    <Box
      paddingX={{ base: 4, lg: 0 }}
      paddingY={{ base: 0, lg: 16 }}
      marginY={8}
      position="relative"
      maxW="960px"
      marginX="auto"
    >
      <Stack spacing={8}>
        <Heading as="h1" size="3xl">
          Coming Soon
        </Heading>
      </Stack>
    </Box>
  );
}
