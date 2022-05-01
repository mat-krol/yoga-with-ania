import { Grid, Stack } from "@chakra-ui/react";
import {
  linkToCurrentSchedule,
  linkToPrivatesAndCorporate,
} from "../common/links";
import { TextImageCard } from "../components/TextImageCard";

export function PractiseWithMeView() {
  return (
    <Stack
      paddingX={{ base: 4, lg: 0 }}
      paddingY={{ base: 0, lg: 16 }}
      marginY={8}
      maxW="960px"
      marginX="auto"
      spacing={{ base: 4, lg: 8 }}
    >
      <Grid
        templateColumns={{ base: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}
        columnGap="16px"
        rowGap={4}
      >
        <a href={linkToCurrentSchedule()}>
          <TextImageCard
            isHoverable
            src="/1e786a31-d84f-4a9d-8018-ba8d783c2aca.jpg"
            text="Current Schedule"
          />
        </a>

        <a href={linkToPrivatesAndCorporate()}>
          <TextImageCard
            isHoverable
            src="/ceb5100b-5b74-4fc5-a2a8-bd65312ad33c.jpg"
            text="Privates & Corporate"
          />
        </a>
      </Grid>
    </Stack>
  );
}
