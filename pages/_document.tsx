import {Head, Html, Main, NextScript} from 'next/document'
import React from "react";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon.png"></link>
                <meta name="theme-color" content="#fff" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}