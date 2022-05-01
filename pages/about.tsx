import { Footer } from "../src/components/Footer";
import { HeaderWithNavigation } from "../src/components/HeaderWithNavigation";
import { Layout } from "../src/components/Layout";
import { AboutView } from "../src/views/AboutView";

export default function AboutPage() {
  return (
    <Layout title="About">
      {{
        header: <HeaderWithNavigation />,
        body: <AboutView />,
        footer: <Footer />,
      }}
    </Layout>
  );
}
