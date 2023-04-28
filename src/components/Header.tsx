import Link from "next/link";

const Header = () => {
  return ( 
    <header className="site-header">
      <div><Link href="/">James Min</Link></div>
      <nav className="nav nav-links">
        <Link href="/projects" className="link">Projects</Link>
        <Link href="/about" className="link">About</Link>
      </nav>
    </header>
  );
}
 
export default Header;


