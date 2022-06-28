import type {NextPage} from 'next'
import Layout from "@components/layout";
import MainCard from "@components/mainCard";
import {faCoins, faComments, faCrown, faHeart, faHouse} from "@fortawesome/free-solid-svg-icons";
import {useUsersQuery} from "../src/generated/graphql";

const Home: NextPage = () => {
    const {data, isLoading} = useUsersQuery();

    return (
        <Layout title="kimsajang">
            <div className={"xl:hidden"}>
                <div className={"grid gap-8"}>
                    <MainCard topic={"토픽 베스트"} icon={faCrown}></MainCard>
                    <MainCard topic={"블라블라"} icon={faComments}></MainCard>
                    <MainCard topic={"썸 연예"} icon={faHeart}></MainCard>
                    <MainCard topic={"주식 투자"} icon={faCoins}></MainCard>
                    <MainCard topic={"부동산"} icon={faHouse}></MainCard>
                </div>
            </div>
            <div>
            {isLoading ? <li>loading...</li> : data?.users.map(user => {
                    return <li key={user.id}>{user.intro}</li>
                }
            )}
            </div>
            <div className={"hidden xl:block"}>
                <div className={"flex"}>
                    <div className={"basis-2/3 grid grid-cols-2 gap-8"}>
                        <div className={"col-span-2 row-span-2"}>
                            <MainCard topic={"토픽 베스트"} icon={faCrown}></MainCard>
                            {/*<div className={"mx-2 p-2 border-b-8"}>*/}
                            {/*    <div className={" border-b-2 pb-2 py-3 font-bold text-xl"}>*/}
                            {/*        <span className={"ml-3"}>토픽 베스트</span>*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        {*/}
                            {/*            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => {*/}
                            {/*                return <div key={value} className={"flex justify-between border-b-2 py-3"}>*/}
                            {/*                    <div className={"font-bold"}>토픽 베스트 👍👍</div>*/}
                            {/*                    <div className={"text-gray-400 flex space-x-2 items-center"}>*/}
                            {/*                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>*/}
                            {/*                        <span>597</span>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            })*/}
                            {/*        }*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div>
                            <MainCard topic={"블라블라"} icon={faComments}></MainCard>
                        </div>
                        <MainCard topic={"썸 연예"} icon={faHeart}></MainCard>
                        <MainCard topic={"주식 투자"} icon={faCoins}></MainCard>
                        <MainCard topic={"부동산"} icon={faHouse}></MainCard>
                    </div>
                    <div className={"basis-1/3"}>
                        <div className={"bg-gray-100 p-6 m-6 rounded-xl"}>
                            <div className={"font-bold p-2 text-xl"}>실시간 인기 가게</div>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => {
                                    return <div key={value} className={"flex justify-between p-2"}>
                                        <div className={"flex space-x-2 "}>
                                            <div className={"flex justify-end w-2"}>{value}</div>
                                            <div>삼겹살</div>
                                        </div>
                                        <div>순위 조정</div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default Home
