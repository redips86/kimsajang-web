import {NextPage} from "next";
import {useRouter} from "next/router";

const Search: NextPage = () => {
    const router = useRouter();
    return (
        <div className={"flex space-x-5  mx-5 mt-3 justify-center items-center"}>
            <input
            className={"w-full border border-gray-400 rounded-full py-3 px-5"}
                type="text" placeholder={"관심있는 내용을 검색해보세요!"}/>
            <button
            className={"text-3xl"}
                onClick={() => router.back()} >
                X
            </button>
        </div>
    );
}

export default Search;