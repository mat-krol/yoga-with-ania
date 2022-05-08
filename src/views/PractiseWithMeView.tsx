import { Box, Grid, Heading, Stack } from "@chakra-ui/react";

import {
  linkToCurrentSchedule, linkToPrivatesAndCorporate
} from "../common/links";
import { EmptyTextImageCard } from "../components/EmptyTextImageCard";
import { TextImageCard } from "../components/TextImageCard";

export function PractiseWithMeView() {
  return (
    <Stack
      paddingX={{ base: 4, lg: 0 }}
      marginY={{ base: 8, lg: 12 }}
      maxW="960px"
      marginX="auto"
      spacing={{ base: 4, lg: 8 }}
    >
      <Heading as="h1" size="3xl" textAlign="center">
        Practise with me
      </Heading>
      <Grid
        templateColumns={{ base: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}
        columnGap="16px"
        rowGap={4}
      >
        <EmptyTextImageCard />

        <a href={linkToCurrentSchedule()}>
          <TextImageCard
            isHoverable
            src="1e786a31-d84f-4a9d-8018-ba8d783c2aca.jpg"
            text="Current Schedule"
            alt="A photo of Ania practising yoga"
          />
        </a>

        <a href={linkToPrivatesAndCorporate()}>
          <TextImageCard
            isHoverable
            src="ceb5100b-5b74-4fc5-a2a8-bd65312ad33c.jpg"
            text="Privates & Corporate"
            alt="A close up of Ania's arms and legs while she's doing the pigeon pose"
          />
        </a>

        <EmptyTextImageCard />
      </Grid>
    </Stack>
  );
}
