import { HeaderWithNavigation } from "../src/components/HeaderWithNavigation";
import { Layout } from "../src/components/Layout";
import { ContactView } from "../src/views/ContactView";

export default function ContactPage() {
  return (
    <Layout title="Contact">
      {{
        header: <HeaderWithNavigation />,
        body: <ContactView />,
      }}
    </Layout>
  );
}
