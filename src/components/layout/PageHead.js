import Head from 'next/head';

const PageHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default PageHead;
