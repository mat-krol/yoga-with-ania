import { Stack, Text } from "@chakra-ui/react";
import moment from "moment";
import { PropsWithChildren } from "react";

type Props = {
  weekNo: number;
};

export function WeekStack({ weekNo, children }: PropsWithChildren<Props>) {
  const year = 2022;

  const monday = moment()
    .day("Monday")
    .isoWeekYear(year)
    .isoWeek(weekNo)
    .format("D MMM");

  const sunday = moment()
    .day("Sunday")
    .isoWeekYear(year)
    .isoWeek(weekNo)
    .format("D MMM");

  return (
    <Stack spacing={4}>
      <Text>
        {monday} - {sunday}
      </Text>

      {children}
    </Stack>
  );
}
