import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
        </>
    )
}