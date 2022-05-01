import { Box, Button, Grid, Heading, Stack, Text } from "@chakra-ui/react";

export function CurrentScheduleView() {
  return (
    <Box
      paddingX={{ base: 4, lg: 0 }}
      paddingY={{ base: 0, lg: 16 }}
      marginY={8}
      position="relative"
      maxW="960px"
      marginX="auto"
    >
      <Stack spacing={8}>
        <Heading as="h1" size="3xl">
          Current schedule
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
