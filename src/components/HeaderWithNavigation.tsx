import { Button, IconButton, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import {
  linkToAbout,
  linkToContact,
  linkToIndex,
  linkToPractiseWithMe,
} from "../common/links";

import { Header } from "./Header";

export function HeaderWithNavigation() {
  const showOnMobile = useBreakpointValue({ base: true, md: false });

  const links = [
    { title: "Practise with me", link: linkToPractiseWithMe() },
    { title: "About", link: linkToAbout() },
    {
      title: "Contact",
      link: linkToContact(),
    },
    { icon: FaInstagram, link: linkToIndex() },
  ];

  return (
    <Header>
      {!showOnMobile && (
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
                />
              ) : (
                <Button colorScheme="teal" fontWeight="normal" variant="link">
                  {title}
                </Button>
              )}
            </Link>
          ))}
        </>
      )}
    </Header>
  );
}
