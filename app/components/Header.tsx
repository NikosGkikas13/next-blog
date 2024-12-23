import Link from "next/link";

const Header = () => {
  return (
    <header className="p-20 border border-blue-400">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/projects">Projects</Link>
        </li>
        <p>testfd</p>
      </ul>
    </header>
  );
};

export default Header;
