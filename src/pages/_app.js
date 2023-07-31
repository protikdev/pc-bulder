import "@/styles/globals.css";
import { PCItemsProvider } from "../../context/buildItems";
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <PCItemsProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </PCItemsProvider>
  );
}
