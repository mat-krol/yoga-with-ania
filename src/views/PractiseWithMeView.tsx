import { Grid, Heading, Stack } from "@chakra-ui/react";

import scheduleImage from "../../public/1e786a31-d84f-4a9d-8018-ba8d783c2aca.jpg";
import corporateImage from "../../public/ceb5100b-5b74-4fc5-a2a8-bd65312ad33c.jpg";

import {
  linkToCurrentSchedule, linkToPrivatesAndCorporate
} from "../common/links";
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
      <Heading as="h1" size="3xl">
        Practise with me
      </Heading>
      <Grid
        templateColumns={{ base: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}
        columnGap="16px"
        rowGap={4}
      >
        <a href={linkToCurrentSchedule()}>
          <TextImageCard
            isHoverable
            src={scheduleImage}
            text="Current Schedule"
            alt="A photo of Ania practising yoga"
          />
        </a>

        <a href={linkToPrivatesAndCorporate()}>
          <TextImageCard
            isHoverable
            src={corporateImage}
            text="Privates & Corporate"
            alt="A close up of Ania's arms and legs while she's doing the pigeon pose"
          />
        </a>
      </Grid>
    </Stack>
  );
}
