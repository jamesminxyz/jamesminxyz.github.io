import Link from "next/link";

const Footer = () => {
  return ( 
    <footer className="site-footer">
      <p>James Min</p>

      <nav className="nav nav-links">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
      </nav>

      {/* <a className="site-footer-logo" href="index.html"><img src="assets/jamiemin-logo-white.svg" alt="jamie min logo"></a> */}
    </footer> 
  );
}
 
export default Footer;