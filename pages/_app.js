import React from "react";
import Layout from "../components/layouts/mainLayout"

import {ThemeProvider} from 'styled-components';
import theme from '../components/acmTheme'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}