import {
  Box,
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Grid,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

import contactImage from "../../public/b9b897ab-f67c-4294-8974-77fb8bfd09ef.jpg";
import { LazyImage } from "../components/LazyImage";

export function ContactView() {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Box
      paddingX={{ base: 4, lg: 0 }}
      paddingY={{ base: 0, lg: 16 }}
      marginY={8}
      position="relative"
      maxW="960px"
      marginX="auto"
    >
      <Grid
        columnGap={16}
        rowGap={8}
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      >
        <Stack
          background="teal.50"
          as="form"
          spacing={8}
          onSubmit={() => {}}
          marginLeft={{ base: 0, lg: "72px" }}
        >
          <Stack spacing={8}>
            {errorMessage && (
              <Alert status="error">
                <AlertIcon />
                {errorMessage}
              </Alert>
            )}
            <Heading as="h1" size="3xl">
              Contact me
            </Heading>
            <Stack>
              <FormControl>
                <FormLabel fontWeight="normal">Name</FormLabel>
                <Input
                  type="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  placeholder="Enter name..."
                  borderRadius={0}
                  borderColor="teal.800"
                />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight="normal">Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="Enter email..."
                  borderRadius={0}
                  borderColor="teal.800"
                />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel fontWeight="normal">Message</FormLabel>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  borderRadius={0}
                  borderColor="teal.800"
                />
              </FormControl>
            </Stack>
          </Stack>
          <Button colorScheme="teal" type="submit">
            Send
          </Button>
        </Stack>
        <LazyImage
          src={contactImage}
          alt="A photo of Ania smiling and hugging her dog Shiver"
        />
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
        right="72px"
      />
    </Box>
  );
}
