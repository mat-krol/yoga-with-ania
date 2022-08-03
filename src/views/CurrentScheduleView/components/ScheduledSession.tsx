import { Button, Grid, Text } from "@chakra-ui/react";
import moment from "moment";

export function ScheduledSession({ url, location, date, title }: any) {
  const isPast = moment(date).isBefore(moment());
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
      opacity={isPast ? 0.5 : 1}
    >
      <Text>{moment(date).format("dddd, D MMM [at] h:mma")}</Text>
      <Text fontWeight="bold">{title}</Text>
      <Text>{location}</Text>
      <Button
        as="a"
        href={url}
        colorScheme="teal"
        fontWeight="normal"
        isDisabled={isPast}
        cursor="pointer"
        _disabled={{
          opacity: 1,
        }}
      >
        Book this class
      </Button>
    </Grid>
  );
}
