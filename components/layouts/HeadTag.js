import Head from "next/head";
import Script from "next/script";

const HeadTag = (props) => (
    <>
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <link rel="icon" href="/favicon.ico" />
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                strategy="afterInteractive"
            />
            <Script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
        
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',, {
                      page_path: window.location.pathname,
                    });
                `}
            </Script>
        </Head>
    </>
);

export default HeadTag;