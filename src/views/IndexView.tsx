import {
  Box, Button, Flex, Grid, Heading, Link, Stack, Text
} from "@chakra-ui/react";
import NextLink from "next/link";

import indexImage from "../../public/1e9fa1f6-faf7-4b87-a4c8-df46a6497313.jpg";

import { linkToAbout } from "../common/links";
import { LazyImage } from "../components/LazyImage";

import { PractiseWithMeView } from "./PractiseWithMeView";

export function IndexView() {
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
            src="bfd293c0-48d2-4fdc-9243-34ccb0454305.jpg"
            alt="A photo of Ania in Warrior 2 pose"
          />

          <Flex
            paddingRight={8}
            direction="column"
            justifyContent="space-between"
            position="relative"
            zIndex={1}
          >
            <Heading as="h1" size="4xl" marginY={{ base: 4, lg: 0 }}>
              Vinyasa & Yin yoga teacher
            </Heading>
            <Text marginY={{ base: 4, lg: 0 }}>
              I’m a qualified vinyasa and yin teacher who loves surprising her
              students with creative transitions and introducing them to new
              poses. My classes are challenging, yet inclusive, as I aim to
              create a space where you can feel supported as you explore the
              limits of your practice and take small steps outside of your
              comfort zone.
            </Text>
            <NextLink href={linkToAbout()}>
              <Link>Read more</Link>
            </NextLink>
          </Flex>
        </Grid>
        <Box
          position="absolute"
          display={{ base: "none", lg: "block" }}
          borderColor="teal.700"
          borderWidth="1px"
          borderStyle="solid"
          width="calc(100% - 72px)"
          height="100%"
          top="0"
          left="72px"
        />
      </Box>
      <PractiseWithMeView />
      <Box
        paddingX={{ base: 4, lg: 0 }}
        paddingY={{ base: 0, lg: 16 }}
        marginY={8}
        position="relative"
        maxW="960px"
        marginX="auto"
      >
        <Stack spacing={8}>
          <Heading as="h2" size="3xl" textAlign="center">
            Testimonials
          </Heading>
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            columnGap="16px"
            rowGap={4}
          >
            <Testimonial
              content="I felt very comfortable throughout with your clear instructions and demos! It was also
good that you offered room for more challenging poses which I loved as a more
experienced yogi. Felt very calm and blessed after."
            />
            <Testimonial
              content="It made me feel relaxed and it was a great workout. I particularly enjoyed the different
              levels of difficulty which were incorporated - there was something for everyone!"
            />
            <Testimonial
              content="[The class] made me feel really calm and at ease. It was a great balance between
challenging but also comfortable and at no point did I feel under pressure to do certain
moves which I've found in other sessions before. 
"
            />
            <Testimonial
              content="Sessions with Ania made me feel
energised. I felt challenged and was able to push myself a little more with each practice if
that's what I wanted to do and was always given options to help me get what I want out of
the session
"
            />
          </Grid>
        </Stack>
      </Box>
    </>
  );
}

function Testimonial({ content }: any) {
  return (
    <Box
      borderColor="teal.700"
      borderWidth="1px"
      borderStyle="solid"
      padding={{ base: 4, lg: 8 }}
    >
      <Text>"{content}"</Text>
    </Box>
  );
}
