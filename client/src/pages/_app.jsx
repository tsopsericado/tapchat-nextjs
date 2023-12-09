import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers";
import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/navigation";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>Whatsapp</title>
        <Link  rel="shortcut icon" href="/favicon" />
      </Head>
      <Component {...pageProps} />;
    </StateProvider>
  );
}
