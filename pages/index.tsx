import type {NextPage} from 'next'
import Layout from "@components/layout";
import MainCard from "@components/mainCard";
import {faCoins, faComments, faCrown, faHeart, faHouse} from "@fortawesome/free-solid-svg-icons";

const Home: NextPage = () => {
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
            <div className={"hidden xl:block"}>
                <div className={"grid grid-cols-3 gap-8"}>
                    <div className={"col-span-2 row-span-2"}>
                        <MainCard topic={"토픽 베스트"} icon={faCrown}></MainCard>
                    </div>
                    {/*<div className={"col-span-1 row-span-full"}>dfdf</div>*/}
                    <div>
                        <MainCard topic={"블라블라"} icon={faComments}></MainCard>
                    </div>
                    <MainCard topic={"썸 연예"} icon={faHeart}></MainCard>
                    <MainCard topic={"주식 투자"} icon={faCoins}></MainCard>
                    <MainCard topic={"부동산"} icon={faHouse}></MainCard>
                </div>
            </div>
        </Layout>
    )
}

export default Home
