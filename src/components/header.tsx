import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();


  const navLinkStyle = (path: string) =>
    pathname === path ? "text-primary font-bold" : "text-muted-foreground hover:text-primary transition";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="md:text-3xl font-extrabold text-stone-800 text-2xl">Todays Dental</h1>
        <nav className="space-x-6 text-sm max-sm:space-x-3">
          <Link to="/Dental-Services/" className={navLinkStyle("/Dental-Services")}>Home</Link>
          <Link to="/about" className={navLinkStyle("/about")}>About</Link>
          <Link to="/services" className={navLinkStyle("/services")}>Services</Link>
          <Link to="/contact" className={navLinkStyle("/contact")}>Contact</Link>
      
        </nav>
      </div>
    </header>
  );
}