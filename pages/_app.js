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
import "../styles/admin.scss";

import { ModalsProvider } from "@mantine/modals";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }) {
    return (
        <MantineProvider>
            <ModalsProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </ModalsProvider>
        </MantineProvider>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps, i18n };
};

export default MyApp;
