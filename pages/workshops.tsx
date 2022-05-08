import { Footer } from "../src/components/Footer";
import { HeaderWithNavigation } from "../src/components/HeaderWithNavigation";
import { Layout } from "../src/components/Layout";
import { ComingSoonView } from "../src/views/ComingSoonView";

export default function WorkshopsPage() {
  return (
    <Layout title="Workshops">
      {{
        header: <HeaderWithNavigation />,
        body: <ComingSoonView />,
        footer: <Footer />,
      }}
    </Layout>
  );
}
