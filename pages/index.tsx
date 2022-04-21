import Footer from "../src/components/Footer";
import { HeaderWithNavigation } from "../src/components/HeaderWithNavigation";
import { Layout } from "../src/components/Layout";
import { IndexView } from "../src/views/IndexView";

export default function IndexPage() {
  return (
    <Layout>
      {{
        header: <HeaderWithNavigation />,
        body: <IndexView />,
        footer: <Footer />,
      }}
    </Layout>
  );
}
