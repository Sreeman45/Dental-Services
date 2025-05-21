import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const [isopen,setisopen]=useState<boolean>(false)

  const navLinkStyle = (path: string) =>
    pathname === path ? "text-primary font-bold" : "text-muted-foreground hover:text-primary transition";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-6 py-4  justify-between items-center flex">
        <h1 className="md:text-3xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 bg-clip-text text-transparent text-2xl">Todays Dental</h1>
        <nav className="space-x-6 text-sm max-sm:space-x-2 hidden md:block">
          <Link to="/" className={navLinkStyle("/")}>Home</Link>
          <Link to="/about" className={navLinkStyle("/about")}>About</Link>
          <Link to="/services" className={navLinkStyle("/services")}>Services</Link>
          <Link to="/contact" className={navLinkStyle("/contact")}>Contact</Link>
      
        </nav>
          <div className="md:hidden " onClick={()=>setisopen(!isopen)}><Menu>
            </Menu></div>
      </div>
        {isopen && (
        <div className="md:hidden px-6 pb-4">
          <Link to="/" className={navLinkStyle("/") + " block py-1"} onClick={() => setisopen(false)}>Home</Link>
          <Link to="/about" className={navLinkStyle("/about") + " block py-1"} onClick={() => setisopen(false)}>About</Link>
          <Link to="/services" className={navLinkStyle("/services") + " block py-1"} onClick={() => setisopen(false)}>Services</Link>
          <Link to="/contact" className={navLinkStyle("/contact") + " block py-1"} onClick={() => setisopen(false)}>Contact</Link>
        </div>
      )}
    
    </header>
  );
}