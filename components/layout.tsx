import Head from "next/head";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple, faGooglePlay} from "@fortawesome/free-brands-svg-icons";

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
                <div className={"text-2xl font-bold"}>홈</div>
                <div className={"text-2xl font-bold"}>메뉴1</div>
                <div className={"text-2xl font-bold"}>메뉴2</div>
            </div>
            <div className={"flex p-2"}>
                <button className={"mx-2 text-white bg-zinc-500 p-3 w-24"}>글쓰기</button>
                <button className={"mx-2 border border-zinc-500 w-24 p-3"}>로그인</button>
            </div>
        </div>
        <div>
            {children}
        </div>
        <div className={"flex justify-between items-center  text-lg"}>
            <div className={"flex-col justify-center items-center"}>
                <div className={"flex"}>
                    <a className={"mx-2"}>서비스 소개</a> |
                    <a className={"mx-2"}>이용약관</a> |
                    <a className={"mx-2"}>디렉토리</a> |
                    <a className={"mx-2"}>개인정보 처리방침</a> |
                    <a className={"mx-2"}>신고 가이드</a>
                </div>
                <div className={"flex mt-3"}>
                    @2022 Prismweaver Inc.
                </div>
            </div>
            <div className={"flex text-md"}>
                <button className={"mx-2 px-7 py-3 bg-zinc-200 rounded-full"}>
                    <FontAwesomeIcon icon={faApple}/>
                    APP STORE
                </button>
                <button className={"mx-2 px-7 py-2 bg-zinc-200 rounded-full"}>
                    <FontAwesomeIcon icon={faGooglePlay}/>
                    GOOGLE PLAY</button>
            </div>
        </div>
    </div>
}