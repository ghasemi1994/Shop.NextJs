import "../styles/globals.css";
import "../styles/menu.css";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
