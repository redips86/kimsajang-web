import '../styles/globals.css'
import type {AppProps} from 'next/app'
import React from "react";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <ApolloProvider client={client}>
            <div className="w-full max-w-xl xl:max-w-screen-2xl mx-auto">
                <Component {...pageProps} />
            </div>
        </ApolloProvider>
    )
}
