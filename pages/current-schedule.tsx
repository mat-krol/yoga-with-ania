import { Footer } from "../src/components/Footer";
import { HeaderWithNavigation } from "../src/components/HeaderWithNavigation";
import { Layout } from "../src/components/Layout";
import { CurrentScheduleView } from "../src/views/CurrentScheduleView";

export default function IndexPage() {
  return (
    <Layout>
      {{
        header: <HeaderWithNavigation />,
        body: <CurrentScheduleView />,
        footer: <Footer />,
      }}
    </Layout>
  );
}
