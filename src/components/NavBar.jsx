import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const hadnleScroll = () => {
      const isScrolled = window.screenY > 10;
      setScrolled(true);
    };
    window.addEventListener("scroll", hadnleScroll);
    return () => window.removeEventListener("scroll", hadnleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#Hero">
          Saba | Pailodze
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
