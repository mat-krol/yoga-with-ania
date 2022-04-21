import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  title?: string;
  children: {
    header?: ReactNode;
    body: ReactNode;
    footer?: ReactNode;
  };
}

export function Layout({ title, children: { header, body, footer } }: Props) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Yoga with Ania` : "Yoga with Ania"}</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      {header}
      <Box minHeight="calc(100vh - 142px)">{body}</Box>
      {footer}
    </>
  );
}
