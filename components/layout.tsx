import Head from "next/head";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faApple, faGooglePlay} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

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
        <div className={"lg:hidden flex justify-between pb-2 border-b-2"}>
            <div className={"flex space-x-5 items-end p-2"}>
                <div className={"text-4xl font-bold"}>Kimsajang</div>
                <div className={"text-2xl font-bold"}>홈</div>
                <div className={"text-2xl font-bold"}>메뉴1</div>
                <div className={"text-2xl font-bold"}>메뉴2</div>
            </div>
            <div className={"flex items-center p-2"}>
                <Link href={"/search"}>
                    <button className={"w-6 h-6"}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={"w-full h-full"}></FontAwesomeIcon>
                    </button>
                </Link>
                <button className={"mx-2 text-white bg-zinc-500 p-3 w-24"}>글쓰기</button>
                <button className={"mx-2 border border-zinc-500 p-3 w-24"}>로그인</button>
            </div>
        </div>
        <div className={"hidden lg:block"}>
            <div className={"flex justify-between pb-2 border-b-2"}>
                <div className={"flex space-x-5 items-end p-2"}>
                    <div className={"text-4xl font-bold"}>Kimsajang</div>
                </div>
                <div className={"flex items-center p-2"}>
                    <Link href={"/search"}>
                        <button className={"w-6 h-6"}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={"w-full h-full"}></FontAwesomeIcon>
                        </button>
                    </Link>
                    <button className={"mx-2 text-white bg-zinc-500 p-3 w-24"}>글쓰기</button>
                    <button className={"mx-2 border border-zinc-500 p-3 w-24"}>로그인</button>
                </div>
            </div>
            <div className={"flex pb-2 border-b-8"}>
                <div className={"flex p-2"}>
                    <div className={"text-2xl font-bold"}>홈</div>
                    <div className={"text-2xl font-bold ml-2"}>메뉴1</div>
                    <div className={"text-2xl font-bold ml-2"}>메뉴2</div>
                </div>
            </div>
        </div>
        <div>
            {children}
        </div>
        <div className={"lg:hidden grid grid-cols-2 gap-2 text-lg mt-2 border-t-2 mx-2 text-gray-500 p-2"}>
            <a>서비스 소개</a>
            <a>이용약관</a>
            <a>디렉토리</a>
            <a>개인정보 처리방침</a>
            <a>신고 가이드</a>
            <a href=""></a>
            <span className={"col-span-2"}>@2022 Prismweaver Inc.</span>
            <div className={"col-span-2 text-base flex justify-center text-black"}>
                <button className={"px-7 py-3 bg-zinc-200 rounded-full"}>
                    <FontAwesomeIcon icon={faApple} className={"mr-3"}/>
                    APP STORE
                </button>
                <button className={"mx-2 px-7 py-2 bg-zinc-200 rounded-full"}>
                    <FontAwesomeIcon icon={faGooglePlay} className={"mr-3"}/>
                    GOOGLE PLAY
                </button>
            </div>
        </div>

        <div className={"lg:block hidden"}>
            <div className={"grid grid-cols-2 gap-2 border-t-2 mx-2 text-gray-500 p-2"}>
                <div className={"flex space-x-5"}>
                    <a>서비스 소개</a>
                    <span>|</span>
                    <a>이용약관</a>
                    <span>|</span>
                    <a>디렉토리</a>
                    <span>|</span>
                    <a>개인정보 처리방침</a>
                    <span>|</span>
                    <a>신고 가이드</a>
                </div>
                <div className={"row-span-2 flex justify-end items-center text-black"}>
                    <button className={"px-7 py-3 bg-zinc-200 rounded-full"}>
                        <FontAwesomeIcon icon={faApple} className={"mr-3"}/>
                        APP STORE
                    </button>
                    <button className={"mx-2 px-7 py-2 bg-zinc-200 rounded-full"}>
                        <FontAwesomeIcon icon={faGooglePlay} className={"mr-3"}/>
                        GOOGLE PLAY
                    </button>
                </div>
                <div>
                    <span>@2022 Prismweaver Inc.</span>
                </div>
            </div>
        </div>

    </div>
}