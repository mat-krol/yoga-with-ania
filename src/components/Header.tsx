import { Flex, Grid, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { linkToIndex } from "../common/links";

export function Header({ children }: PropsWithChildren<{}>) {
  return (
    <Grid
      paddingX={{ base: 4, lg: 0 }}
      columnGap={16}
      paddingY={6}
      templateColumns="1fr 1fr"
      maxW="960px"
      marginX="auto"
    >
      <Stack direction="row">
        <Link href={linkToIndex()}>
          <Heading
            as="h1"
            size="2xl"
            fontWeight="normal"
            fontFamily="Antic Didone"
            lineHeight="0.95"
            letterSpacing="-2px"
          >
            Yoga with Ania
          </Heading>
        </Link>
      </Stack>

      <Flex alignItems="center" justifyContent="space-between">
        {children}
      </Flex>
    </Grid>
  );
}
