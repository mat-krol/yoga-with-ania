import { Grid, Heading, Stack } from "@chakra-ui/react";

import {
  linkToCurrentSchedule, linkToOnDemand, linkToPrivatesAndCorporate,
  linkToWorkshops
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
            src="bfd293c0-48d2-4fdc-9243-34ccb0454305.jpg"
            text="Current Schedule"
            alt="A photo of Ania practising yoga"
          />
        </a>

        <a href={linkToPrivatesAndCorporate()}>
          <TextImageCard
            isHoverable
            src="37f57adb-496e-4250-b321-404f54b715ee.jpg"
            text="Privates & Corporate"
            alt="A close up of Ania's arms and legs while she's doing the pigeon pose"
          />
        </a>

        <a href={linkToOnDemand()}>
          <TextImageCard
            isHoverable
            src="f37898ef-02e8-4dca-8cfb-fccd91962ba2.jpg"
            text="On Demand"
            alt="A photo of Ania practising yoga"
          />
        </a>

        <a href={linkToWorkshops()}>
          <TextImageCard
            src="57972385-4e82-4618-8f6a-2f28dbc7e5c0.jpg"
            isHoverable
            text="Workshops"
            alt="A photo of Ania practising yoga"
          />
        </a>
      </Grid>
    </Stack>
  );
}
