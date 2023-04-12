import React from "react";
import App from "next/app";
import i18n from "../i18n";
import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";

import "../styles/pages/home.scss";
import "../styles/header.scss";
import "../styles/footer.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);

    const language = appContext.ctx.req.headers["accept-language"];
    await i18n.changeLanguage(language);

    return { ...appProps, i18n };
};

export default MyApp;
