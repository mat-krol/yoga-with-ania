import {
  Heading, Link, ListItem, OrderedList, Stack, Table, TableContainer, Tbody, Td,
  Text, Th, Thead, Tr, UnorderedList
} from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";

type Props = {
  content: any;
};

export function PageContent({ content }: Props) {
  return (
    <Stack minHeight={{ md: "400px" }}>
      <Markdown
        options={{
          overrides: {
            h1: (props: any) => (
              <Heading
                {...props}
                as="h1"
                size="lg"
                marginBottom={4}
                marginTop={4}
              />
            ),
            h2: (props: any) => (
              <Heading
                {...props}
                as="h2"
                size="md"
                marginBottom={4}
                marginTop={4}
              />
            ),
            h3: (props: any) => <Heading {...props} as="h3" size="sm" />,
            h4: (props: any) => (
              <Heading
                {...props}
                as="h4"
                size="sm"
                marginBottom={2}
                marginTop={4}
              />
            ),
            p: (props: any) => <Text {...props} paddingY={2} />,
            ul: (props: any) => <UnorderedList {...props} paddingLeft={2} />,
            ol: (props: any) => <OrderedList {...props} />,
            li: (props: any) => <ListItem {...props} />,
            a: (props: any) => <Link {...props} />,
            table: (props: any) => (
              <TableContainer>
                <Table variant="simple" {...props}></Table>
              </TableContainer>
            ),
            thead: (props: any) => <Thead {...props} />,
            tbody: (props: any) => <Tbody {...props} />,
            th: (props: any) => <Th {...props} />,
            tr: (props: any) => <Tr {...props} />,
            td: (props: any) => (
              <Td
                {...props}
                whiteSpace="normal"
                paddingInline={{ base: 1, md: 3 }}
              />
            ),
          },
        }}
      >
        {content}
      </Markdown>
    </Stack>
  );
}
