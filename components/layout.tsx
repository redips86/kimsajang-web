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
            <img src="" alt=""/>
            <div className={""}>
                <h2>홈</h2>
                <h2>기업 리뷰</h2>
                <h2>채용 공고</h2>
                <button>글쓰기</button>
                <button>로그인</button>
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