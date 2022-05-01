import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import aboutImage from "../../public/b965ad6f-80d5-47b4-b8f3-0b3b270f8f12.jpg";
import vinyasaImage from "../../public/1e786a31-d84f-4a9d-8018-ba8d783c2aca.jpg";
import skillsImage from "../../public/ceb5100b-5b74-4fc5-a2a8-bd65312ad33c.jpg";
import meditationImage from "../../public/c417a8c5-007d-410a-8ed1-04f6b2b4e898.jpg";
import pranayamaImage from "../../public/53dfeb3e-db1e-469f-b4ad-bab54ac5e7c9.jpg";

export function AboutView() {
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
          <Image
            src={aboutImage}
            width="500px"
            height="500px"
            objectFit="cover"
            placeholder="blur"
          />

          <Stack
            paddingRight={8}
            direction="column"
            justifyContent="space-between"
            spacing={8}
          >
            <Heading as="h1" size="4xl">
              About Ania
            </Heading>
            <Text>
              Having a background in contemporary dance, I have always been
              attracted to various forms of movement. I dabbled in different
              styles of yoga in studios and online and with time came to realise
              that yoga was my favourite form of exercise and
              self-care—something I could never get enough of! I appreciate the
              practice for being an opportunity to switch off thinking and
              striving to achieve (something that’s an inherent part of my 9-5
              as an academic researcher) and take a moment to breathe and
              remember that change takes time.
            </Text>
            <Text>
              I’m a qualified vinyasa and yin teacher who loves surprising her
              students with creative transitions and introducing them to new
              poses. My classes are challenging, yet inclusive, as I aim to
              create a space where you can feel supported as you explore the
              limits of your practice and take small steps outside of your
              comfort zone. My teaching emphasises breath as integral in yoga
              and invites students to appreciate the tradition and science
              behind how we breathe in our practice and off the mat. In our
              sessions, you'll often hear me remind you to focus on the
              functional aspects of asanas (where do you feel it?) and forget
              about the aesthetics (does it look pretty?).
            </Text>
            <Text>
              I’m also a fan of the outdoors and a dog lover, so please make
              sure to say hello if you see me outside the studio hiking up
              Arthur’s Seat with my pup, Shiver.
            </Text>
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
        <Heading as="h2" size="2xl">
          My areas of interest
        </Heading>
        <Grid
          templateColumns={{ base: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}
          columnGap="16px"
          rowGap={4}
        >
          <Card src={vinyasaImage} text="Vinyasa & Mandala" />
          <Card
            src={skillsImage}
            text="Skills (e.g. arm balances, inversions)"
          />
          <Card src={meditationImage} text="Yin Yoga & Meditation" />
          <Card
            src={pranayamaImage}
            text="Pranayama and the science of breath"
          />
        </Grid>
      </Stack>
    </>
  );
}

const Card = ({ src, text }: any) => (
  <Box>
    <Image
      src={src}
      width="500px"
      height="500px"
      objectFit="cover"
      placeholder="blur"
    />
    <Text>{text}</Text>
  </Box>
);
