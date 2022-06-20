import React from "react";
import Layout from "../components/layouts/mainLayout"
import {ThemeProvider} from 'styled-components';
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import theme from '../components/acmTheme'
import '../styles/globals.css'
import Script from "next/script";

// log the pageview with their URL
const pageview = (url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
    })
}

export default function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            pageview(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return getLayout(
        <ThemeProvider theme={theme}>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                strategy="afterInteractive"
            />
            <Script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                      page_path: window.location.pathname,
                    });
                `}
            </Script>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}