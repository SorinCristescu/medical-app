import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
const Header = () => {
  return (
    <div className="top-bar">
      <h2>Logo</h2>
      <div className="nav">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/test">
          <a>Test</a>
        </Link>
        <Link href="/new">
          <a>Add</a>
        </Link>
        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Header;
