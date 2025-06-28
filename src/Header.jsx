import React, { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header style={styles.header}>
      {/* Logo */}
      <a href="#" style={styles.logoContainer}>
        <img
          src="https://i.imgur.com/ausl0P2.png"
          alt="logo"
          style={styles.logo}
        />
      </a>

      {/* Hamburger Menu */}
      {isMobile && (
        <div style={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? (
            <i className="fas fa-times" style={styles.icon}></i>
          ) : (
            <i className="fas fa-bars" style={styles.icon}></i>
          )}
        </div>
      )}

      {/* Navigation */}
      <nav
        style={
          isMobile
            ? {
                ...styles.navMobile,
                transform: menuOpen ? "translateX(0)" : "translateX(100%)",
              }
            : styles.navDesktop
        }
      >
        <ul style={isMobile ? styles.navListMobile : styles.navListDesktop}>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",
    backgroundColor: "#000091",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    overflowX: "hidden",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "55px",
    objectFit: "contain",
  },
  hamburger: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 1001,
  },
  icon: {
    fontSize: "24px",
    color: "#fff",
  },
  navMobile: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "70vw",
    backgroundColor: "#000091",
    transition: "transform 0.2s ease-in-out",
    paddingTop: "80px",
    zIndex: 999,
  },
  navDesktop: {
    display: "flex",
  },
  navListMobile: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
    padding: 0,
  },
  navListDesktop: {
    listStyle: "none",
    display: "flex",
    gap: "25px",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "500",
    fontFamily: "Poppins, sans-serif",
    transition: "color 0.3s",
  },
};
