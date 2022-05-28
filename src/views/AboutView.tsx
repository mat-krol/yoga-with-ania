import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";

import { LazyImage } from "../components/LazyImage";
import { PageContent } from "../components/PageContent";
import { TextImageCard } from "../components/TextImageCard";

export type Props = {
  data: { title: string };
  content: string;
};

export function AboutView(props: Props) {
  return (
    <>
      <Box
        paddingX={{ base: 4, lg: 0 }}
        paddingY={{ base: 0, lg: 16 }}
        marginY={8}
        position="relative"
        maxW="960px"
        marginX="auto"
      >
        <Grid columnGap={16} templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
          <LazyImage
            src="b965ad6f-80d5-47b4-b8f3-0b3b270f8f12.jpg"
            alt="A photo of Ania looking into the space while smiling. She is sat on a grass green yoga mat and wearing a pink/burgundy yoga outfit."
          />

          <Stack
            paddingRight={8}
            direction="column"
            justifyContent="space-between"
            spacing={8}
          >
            <Heading as="h1" size="4xl">
              {props.data.title}
            </Heading>
            <PageContent content={props.content} />
          </Stack>
        </Grid>
        <Box
          position="absolute"
          borderColor="teal.700"
          display={{ base: "none", lg: "block" }}
          borderWidth="1px"
          borderStyle="solid"
          width="calc(100% - 72px)"
          height="100%"
          top="0"
          left="72px"
        />
      </Box>
      <Stack
        paddingX={{ base: 4, lg: 0 }}
        paddingY={{ base: 0, lg: 16 }}
        marginY={8}
        maxW="960px"
        marginX="auto"
        spacing={{ base: 4, lg: 8 }}
      >
        <Heading as="h2" size="3xl">
          My areas of interest
        </Heading>
        <Grid
          templateColumns={{ base: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}
          columnGap="16px"
          rowGap={4}
        >
          <TextImageCard
            src="1e786a31-d84f-4a9d-8018-ba8d783c2aca.jpg"
            text="Vinyasa & Mandala"
            alt="A photo of Ania practising yoga"
          />
          <TextImageCard
            src="ceb5100b-5b74-4fc5-a2a8-bd65312ad33c.jpg"
            text="Skills (e.g. arm balances, inversions)"
            alt="A close up of Ania's arms and legs while she's doing the pigeon pose"
          />
          <TextImageCard
            src="c417a8c5-007d-410a-8ed1-04f6b2b4e898.jpg"
            text="Yin Yoga & Meditation"
            alt="A photo of Ania practising yoga"
          />
          <TextImageCard
            src="53dfeb3e-db1e-469f-b4ad-bab54ac5e7c9.jpg"
            text="Pranayama and the science of breath"
            alt="A close up of Ania while she's practising breathing in savasana"
          />
        </Grid>
      </Stack>
    </>
  );
}
