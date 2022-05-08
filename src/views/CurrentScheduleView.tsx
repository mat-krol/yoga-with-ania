import { Box, Button, Grid, Heading, Stack, Text } from "@chakra-ui/react";

import { LazyImage } from "../components/LazyImage";

export function CurrentScheduleView() {
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
        <Grid columnGap={16} templateColumns={{ base: "1fr", lg: "1fr 3fr" }}>
          <LazyImage
            src="3e7852c5-a17b-40c5-912f-df83ce7240b1.jpg"
            alt="A photo of Ania looking into the space while smiling. She is sat on a grass green yoga mat and wearing a pink/burgundy yoga outfit."
          />

          <Stack
            paddingRight={8}
            direction="column"
            justifyContent="space-between"
            spacing={8}
          >
            <Heading as="h1" size="3xl">
              Current Schedule
            </Heading>

            <Text>
              Here are the classes I'll be teaching this week in Edinburgh and
              North East of England.
              <br />
              Use the "Book this class" to book them on the sites of relevant
              yoga studios.
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
      <Box
        paddingX={{ base: 4, lg: 0 }}
        paddingY={{ base: 0, lg: 16 }}
        marginY={8}
        position="relative"
        maxW="960px"
        marginX="auto"
      >
        <Stack spacing={8}>
          <Heading as="h3" size="2xl">
            Week of 2-8th May
          </Heading>
          <Stack spacing={4}>
            <ScheduledSession
              title="Flow & Restore"
              date="Saturday 11am"
              location="East Side Yoga, Edinburgh"
              url="https://www.eastsideyoga.co.uk/book--schedule.html"
            />
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

function ScheduledSession({ url, location, date, title }: any) {
  return (
    <Grid
      borderWidth="1px"
      borderStyle="solid"
      borderColor="teal.700"
      padding={4}
      templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr 1fr" }}
      alignItems="center"
      columnGap={12}
      rowGap={2}
    >
      <Text>{date}</Text>
      <Text fontWeight="bold">{title}</Text>
      <Text>{location}</Text>
      <Button as="a" href={url} colorScheme="teal" fontWeight="normal">
        Book this class
      </Button>
    </Grid>
  );
}
