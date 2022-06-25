import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Layout() {
    return (
        <>
            <div className={"hidden xl:block flex justify-between pb-2 border-b-2"}>
                <div className={"flex justify-between p-2"}>
                    <div className={"flex space-x-5 items-end"}>
                        <div className={"text-4xl font-bold cursor-pointer"}>Kimsajang</div>
                        <div className={"text-2xl font-bold cursor-pointer"}>홈</div>
                        <div className={"text-2xl font-bold cursor-pointer"}>메뉴1</div>
                        <div className={"text-2xl font-bold cursor-pointer"}>메뉴2</div>
                    </div>
                    <div>
                        <button className={"mx-2 text-white bg-zinc-500 p-3 w-24"}>글쓰기</button>
                        <button className={"mx-2 border border-zinc-500 p-3 w-24"}>로그인</button>
                    </div>
                </div>

            </div>
            <div className={"xl:hidden"}>
                <div className={"flex justify-between pb-2 border-b-2"}>
                    <div className={"flex space-x-5 items-c" +
                        "enter p-2"}>
                        <div className={"text-4xl font-bold cursor-pointer"}>Kimsajang</div>
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
                        <div className={"text-2xl font-bold cursor-pointer"}>홈</div>
                        <div className={"text-2xl font-bold ml-2 cursor-pointer"}>메뉴1</div>
                        <div className={"text-2xl font-bold ml-2 cursor-pointer"}>메뉴2</div>
                    </div>
                </div>
            </div>
        </>
    )
}
