import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { useSession, signOut } from 'next-auth/client';

const Header = () => {
  const [session, loading] = useSession();

  const signOutHandler = () => {
    signOut();
  };

  return (
    <div className="top-bar">
      <Link href="/">
        <a>
          <h2>Logo</h2>
        </a>
      </Link>
      <div className="nav">
        <Link href="/test">
          <a>Test</a>
        </Link>
        <Link href="/new">
          <a>Add</a>
        </Link>
        {session && (
          <Link href="/profile">
            <a>My Profile</a>
          </Link>
        )}
        {!session && !loading && (
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        )}
        {session && !loading && (
          <button onClick={signOutHandler}>
            <a>Sign out</a>
          </button>
        )}
        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Header;
