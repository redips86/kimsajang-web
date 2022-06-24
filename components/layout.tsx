import Head from "next/head";
import React from "react";
import Header from "./header";
import Footer from "@components/footer";

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
        <Header></Header>
        <div>
            {children}
        </div>
        <Footer></Footer>
    </div>
}