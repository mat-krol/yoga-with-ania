import moment from "moment";
import { GetStaticProps } from "next";

import { getPages } from "../cms/utils/getPages";
import { Footer } from "../src/components/Footer";
import { HeaderWithNavigation } from "../src/components/HeaderWithNavigation";
import { Layout } from "../src/components/Layout";
import { CurrentScheduleView } from "../src/views/CurrentScheduleView";

export default function IndexPage({ sessions, weekNos }: any) {
  return (
    <Layout>
      {{
        header: <HeaderWithNavigation />,
        body: <CurrentScheduleView sessions={sessions} weekNos={weekNos} />,
        footer: <Footer />,
      }}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const thisWeekNo = moment().startOf("isoWeek").isoWeek();

  const sessions = getPages("cms/content/sessions")
    .map((session) => ({
      ...session,
      weekNo: moment(session.date).isoWeek(),
    }))
    .filter(({ weekNo }) => weekNo >= thisWeekNo)
    .sort((a, b) => moment(a.date).diff(moment(b.date)));

  const weekNos = [
    thisWeekNo,
    ...sessions.map((session) => session.weekNo),
  ].filter((v, i, a) => a.indexOf(v) === i);

  return {
    props: { sessions, weekNos },
  };
};
