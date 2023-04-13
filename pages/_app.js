import React from "react";
import App from "next/app";
import i18n from "../i18n";
import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";

import "../styles/pages/home.scss";
import "../styles/pages/contact.scss";
import "../styles/pages/about.scss";
import "../styles/pages/reference.scss";
import "../styles/pages/quarry.scss";

import "../styles/pages/materials/materials.scss";
import "../styles/pages/materials/material_group.scss";
import "../styles/pages/materials/material_item_full.scss";

import "../styles/header.scss";
import "../styles/footer.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
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
