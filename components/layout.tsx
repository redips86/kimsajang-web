import Head from "next/head";
import React from "react";

interface LayoutProps {
    title: String;
    children: React.ReactNode;
}

export default function Layout({
                                   title,
                                   children,
                               }: LayoutProps) {
    return <div>
        <Head>
            <title>{title}</title>
        </Head>
        <div>
            Top
        </div>
        <div>
            {children}
        </div>
        <div>
            Footer
        </div>
    </div>
}