import { Footer } from "../src/components/Footer";
import { HeaderWithNavigation } from "../src/components/HeaderWithNavigation";
import { Layout } from "../src/components/Layout";
import { ComingSoonView } from "../src/views/ComingSoonView";

export default function OnDemandPage() {
  return (
    <Layout title="On Demand">
      {{
        header: <HeaderWithNavigation />,
        body: <ComingSoonView />,
        footer: <Footer />,
      }}
    </Layout>
  );
}
