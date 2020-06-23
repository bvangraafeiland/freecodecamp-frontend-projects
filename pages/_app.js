import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
            <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
        </>
    )
}