import type { AppProps } from "next/app";
import Sidebar from "@/components/commons/sidebar";
import style from "@/styles/_app/index.module.sass";
import { Provider } from "react-redux";
import store from "@/redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={style.appContainer}>
      <Provider store={store}>
        <Sidebar />
        <Component {...pageProps} />;
      </Provider>
    </div>
  );
}
