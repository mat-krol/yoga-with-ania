import {
  Button,
  IconButton,
  Stack,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import {
  linkToAbout,
  linkToContact,
  linkToPractiseWithMe,
} from "../common/links";

import { Header } from "./Header";

const links = [
  { title: "Practise with me", link: linkToPractiseWithMe() },
  { title: "About", link: linkToAbout() },
  {
    title: "Contact",
    link: linkToContact(),
  },
  { icon: FaInstagram, link: "https://www.instagram.com/yogawithania_" },
];

export function HeaderWithNavigation() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Header>
      {isMobile ? (
        <Stack align="end" marginTop={4} spacing={0}>
          <LinkList />
        </Stack>
      ) : (
        <Flex alignItems="center" justifyContent="space-between">
          <LinkList />
        </Flex>
      )}
    </Header>
  );
}

const LinkList = () => (
  <>
    {links.map(({ title, link, icon: Icon }) => (
      <Link href={link} key={title}>
        {Icon ? (
          <IconButton
            color="teal.800"
            aria-label="Instagram"
            variant="link"
            justifyContent="end"
            icon={<Icon />}
            position="relative"
            paddingY={{ base: 2, md: "unset" }}
            _hover={{
              _before: {
                width: "16px",
                background: "teal.800",
                height: "1.5px",
                content: '""',
                display: "block",
                position: "absolute",
                bottom: "-1px",
                right: "0",
              },
            }}
          />
        ) : (
          <Button
            colorScheme="teal"
            fontWeight="normal"
            variant="link"
            textAlign="right"
            paddingY={{ base: 2, md: "unset" }}
          >
            {title}
          </Button>
        )}
      </Link>
    ))}
  </>
);
