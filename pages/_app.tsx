import '../styles/globals.css'
import type {AppProps} from 'next/app'
import React from "react";
import {QueryClient, QueryClientProvider,} from 'react-query'
import {SessionProvider} from "next-auth/react";
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

const queryClient = new QueryClient();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEdZcYUqlcQ1wWQMBP7n1UFfcWQqmkxB4",
    authDomain: "kimsajang-ed09a.firebaseapp.com",
    projectId: "kimsajang-ed09a",
    storageBucket: "kimsajang-ed09a.appspot.com",
    messagingSenderId: "823354628301",
    appId: "1:823354628301:web:50bb36bcfc7d77c2033184"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
    return (
        <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </SessionProvider>
    )
}
