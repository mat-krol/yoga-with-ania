import { Footer } from "../src/components/Footer";
import { HeaderWithNavigation } from "../src/components/HeaderWithNavigation";
import { Layout } from "../src/components/Layout";
import { PractiseWithMeView } from "../src/views/PractiseWithMeView";

export default function PractiseWithMePage() {
  return (
    <Layout title="Practise with me">
      {{
        header: <HeaderWithNavigation />,
        body: <PractiseWithMeView />,
        footer: <Footer />,
      }}
    </Layout>
  );
}
