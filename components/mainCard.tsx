import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import Link from "next/link";

interface MainCardProps {
    topic: string;
    icon: IconDefinition;
}

export default function MainCard({
                                     topic,
                                     icon
                                 }: MainCardProps) {

    return (
        <div className={"mx-2 p-2 border-b-8 xl:border-b-0"}>
            <div className={"border-b-2 pb-2 py-3 font-bold text-xl"}>

                <div className={"flex justify-between"}>
                    <div>
                        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
                        <span className={"ml-3"}>{topic}</span>
                    </div>
                    <span className={"hidden xl:block"}>
                    <Link href={`/topic/${topic.replaceAll(' ', '-')}`}>
                        <div className={"cursor-pointer text-base"}>더보기 &gt;
                        </div>
                    </Link>
                </span>
                </div>
            </div>
            <div>
                {
                    [1, 2, 3, 4, 5].map(value => {
                        return <div key={value} className={"flex justify-between border-b-2 py-3"}>
                            <div className={"font-bold"}>블라블라 글 제목🥳</div>
                            <div className={"text-gray-400 flex space-x-2 items-center"}>
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                <span>597</span>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className={"xl:hidden"}>
                <Link href={`/topic/${topic.replaceAll(' ', '-')}`}>
                    <div className={"flex justify-center items-center h-10 text-gray-400" +
                        " cursor-pointer"}>더보기
                    </div>
                </Link>
            </div>
        </div>
    )
};