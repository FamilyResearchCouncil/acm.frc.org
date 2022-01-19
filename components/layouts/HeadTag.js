import Head from "next/head";

const HeadTag = (props) => (
    <>
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <link rel="icon" href="/favicon.ico" />
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-6Q7XHZNG02`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6Q7XHZNG02', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </Head>
    </>
);

export default HeadTag;