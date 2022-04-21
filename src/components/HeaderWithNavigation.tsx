import { Button, IconButton, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { linkToIndex } from "../common/links";

import { Header } from "./Header";

export function HeaderWithNavigation() {
  const showOnMobile = useBreakpointValue({ base: true, md: false });

  const links = [
    { title: "Schedule", link: linkToIndex() },
    { title: "About Me", link: linkToIndex() },
    {
      title: "Contact",
      link: linkToIndex(),
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
                  color="beige.800"
                  aria-label="Instagram"
                  variant="link"
                  justifyContent="end"
                  icon={<Icon />}
                />
              ) : (
                <Button colorScheme="beige" fontWeight="normal" variant="link">
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
