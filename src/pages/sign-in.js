import Auth from '../components/forms/Auth';
import { getSession } from 'next-auth/client';

const signin = () => {
  return <Auth />;
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default signin;
