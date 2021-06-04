import { getSession } from 'next-auth/client';
import ChangePassword from '../components/forms/ChangePassword';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

const Profile = (props) => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedSession, setLoadedSession] = useState(false);
  // const router = useRouter();
  // console.log(getSession);
  // useEffect(() => {
  //   getSession().then((session) => {
  //     // if we want to redirect to a different page
  //     // setLoadedSession(session);
  //     console.log(session);
  //     if (!session) {
  //       router.replace('/sign-in');
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // if (isLoading) <p>Loading...</p>;
  const changePasswordHandler = async ({ oldPassword, newPassword }) => {
    const result = await fetch('/api/auth/change-password', {
      method: 'PATCH',
      body: JSON.stringify({ oldPassword, newPassword }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await result.json();

    console.log('data', data);
  };
  return (
    <div>
      The Profile Page
      <ChangePassword changePasswordHandler={changePasswordHandler} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Profile;
