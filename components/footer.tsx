import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {faApple, faGooglePlay} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <div className={"xl:hidden grid grid-cols-2 gap-2 text-lg mt-2 border-t-2 mx-2 text-gray-500 p-2"}>
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

            <div className={"xl:block hidden"}>
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
        </>
    );
}