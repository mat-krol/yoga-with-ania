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
  Image,
  Flex,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

export function ContactView() {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Box position="relative" width="100%">
      <Image
        src="/b9b897ab-f67c-4294-8974-77fb8bfd09ef.jpg"
        width="calc(100vw - 94px)"
        height="calc(100vh - 94px)"
        objectFit="cover"
        objectPosition="right 20%"
      />
      <Stack
        background="teal.25"
        padding={8}
        paddingBottom={16}
        paddingRight="94px"
        as="form"
        spacing={8}
        onSubmit={() => {}}
        position="absolute"
        top="0"
        width="50%"
        right="0"
      >
        <Stack spacing={8}>
          {errorMessage && (
            <Alert status="error">
              <AlertIcon />
              {errorMessage}
            </Alert>
          )}
          <Heading as="h1" size="2xl">
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
    </Box>
  );
}
