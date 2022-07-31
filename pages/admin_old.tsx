import Head from "next/head";
import React, { useEffect } from "react";

import { config } from "../cms/config";

export default function AdminPage() {
  useEffect(() => {
    (async () => {
      const CMS = (await import("netlify-cms-app")).default;
      //@ts-ignore
      CMS.init({ config });
    })();
  }, []);

  return (
    <Head>
      <title>Admin - Yoga with Ania</title>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
  );
}
