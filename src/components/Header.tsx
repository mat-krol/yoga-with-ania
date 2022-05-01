import { Grid, Heading, Stack } from "@chakra-ui/react";
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
      <Stack direction="row" cursor="pointer">
        <Link href={linkToIndex()}>
          <Heading as="h1" size="2xl">
            Yoga with Ania
          </Heading>
        </Link>
      </Stack>

      {children}
    </Grid>
  );
}
