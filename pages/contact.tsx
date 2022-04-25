import Footer from "../src/components/Footer";
import { HeaderWithNavigation } from "../src/components/HeaderWithNavigation";
import { Layout } from "../src/components/Layout";
import { ContactView } from "../src/views/ContactView";

export default function ContactPage() {
  return (
    <Layout>
      {{
        header: <HeaderWithNavigation />,
        body: <ContactView />,
      }}
    </Layout>
  );
}
