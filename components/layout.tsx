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
        <div className={"flex justify-between p-2 border-b-2"}>
            <div className={"flex space-x-5 items-end p-2"}>
                <div className={"text-4xl font-bold"}>Kimsajang</div>
                <div className={"ml-6  text-2xl font-bold"}>홈</div>
                <div className={"text-2xl font-bold"}>메뉴1</div>
                <div className={"text-2xl font-bold"}>메뉴2</div>
            </div>
            <div className={"flex p-2"}>
                <button className={"text-white bg-zinc-600 p-3 w-24"}>글쓰기</button>
                <button className={"ml-2 border border-zinc-600 w-24 p-3"}>로그인</button>
            </div>
        </div>
        <div>
            {children}
        </div>
        <div>
            Footer
        </div>
    </div>
}