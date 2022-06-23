import type {NextPage} from 'next'
import Layout from "@components/layout";

const Home: NextPage = () => {
    return (
        <Layout title={"kimsajang"}>
            <div>
                <h1 className={"text-3xl"}></h1>
                Main
            </div>
        </Layout>
    )
}

export default Home
