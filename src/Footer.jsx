export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.sections}>
        {/* Logo */}
        <img
          src="https://i.imgur.com/ausl0P2.png"
          alt="Logo"
          style={styles.logo}
        />

        {/* Navigation Links */}
        <ul style={styles.list}>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#certificates" className="nav-link">
              Certificates
            </a>
          </li>
          <li>
            <a href="#blog" className="nav-link">
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div style={styles.icons}>
          <a
            href="https://github.com/abdelhalim"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://linkedin.com/in/abdelhalim"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://wa.me/20123456789"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <i className="fab fa-whatsapp" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <i className="fab fa-tiktok" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p style={styles.copy}>
        &copy; {new Date().getFullYear()}{" "}
        <a href="#" style={styles.copy}>
          Abdelhalim Yasser
        </a>{" "}
        | All Right Reversed
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#000091",
    color: "#eee",
    padding: "40px 20px",
    textAlign: "center",
  },
  sections: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "30px",
  },
  logo: {
    width: "180px",
    height: "auto",
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: 0,
    margin: 0,
    textAlign: "left",
  },
  icons: {
    display: "flex",
    gap: "20px",
    fontSize: "22px",
    marginTop: "10px",
  },
  iconLink: {
    color: "#eee",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  copy: {
    marginTop: "30px",
    fontSize: "14px",
    color: "#999",
    textDecoration: "none",
  },
};
