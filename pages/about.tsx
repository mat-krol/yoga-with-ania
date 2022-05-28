import { GetStaticProps } from "next";

import getPageContent from "../cms/utils/getPageContent";
import { Footer } from "../src/components/Footer";
import { HeaderWithNavigation } from "../src/components/HeaderWithNavigation";
import { Layout } from "../src/components/Layout";
import { AboutView, Props } from "../src/views/AboutView";

export default function AboutPage(props: Props) {
  return (
    <Layout title={props.data.title}>
      {{
        header: <HeaderWithNavigation />,
        body: <AboutView {...props} />,
        footer: <Footer />,
      }}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const { data, content } = getPageContent("about");

  return {
    props: { data, content },
  };
};
