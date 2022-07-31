import dynamic from "next/dynamic";

import { config } from "../cms/config";

const CMS = dynamic(
  // @ts-ignore
  () =>
    import("netlify-cms-app").then((cms) => {
      // @ts-ignore
      cms.init({ config });
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage: React.FC = () => {
  return <CMS />;
};

// export function getStaticProps() {
//   return {
//     notFound: process.env.NODE_ENV === "production",
//   };
// }

export default AdminPage;
