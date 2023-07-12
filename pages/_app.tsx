import "../styles/global.scss";
import "antd/dist/antd.js";
import type { AppProps } from "next/app";
import Error from "./404";

function MyApp({ Component, pageProps, err }: AppProps & { err: any }) {
  if (err && err.code === 404) {
    return <Error />;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
