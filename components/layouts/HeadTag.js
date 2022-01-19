import React, { useEffect, useState } from "react";
import Head from "next/head";

// // log the pageview with their URL
// export const pageview = (url) => {
//     window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
//         page_path: url,
//     })
// }
//
// // log specific events happening.
// export const event = ({ action, params }) => {
//     window.gtag('event', action, params)
// }


const HeadTag = (props) => (
    <>
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <link rel="icon" href="/favicon.ico" />
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </Head>
    </>
);

export default HeadTag;