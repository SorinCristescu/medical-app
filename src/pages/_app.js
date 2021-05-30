import '../css/style.css';
import '../css/form.css';
import Head from 'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Medical App</title>
      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/new">
            <a>Add</a>
          </Link>
        </div>

        <h2>Logo</h2>
      </div>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
