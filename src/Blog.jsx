export default function Blog() {
  return (
    <div style={styles.container} id="blog">
      <h1 style={styles.title}>Blog</h1>
      <h1 style={styles.title}>Coming Soon</h1>
      <p style={styles.subtitle}>
        I'm working hard to improve this section. Stay tuned!
      </p>
      <p style={styles.follow}>follow me, please</p>
      <div style={styles.icons}>
        <a
          href="https://github.com/abdelhalim"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black" }}
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://linkedin.com/in/abdelhalim"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black" }}
        >
          <i
            className="fab fa-linkedin fa-2x"
            style={{ marginLeft: "15px" }}
          ></i>
        </a>
        <a
          href="https://wa.me/20123456789"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black" }}
        >
          <i
            className="fab fa-whatsapp fa-2x"
            style={{ marginLeft: "15px" }}
          ></i>
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    backgroundImage: 'url("https://i.imgur.com/2Uy0lmQ.jpeg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  },
  title: {
    fontSize: "48px",
    marginBottom: "30px",
  },
  subtitle: {
    fontSize: "20px",
    margin: "5px",
  },
  follow: {
    margin: "15px",
    textAlign: "center",
    alignItems: "center",
  },
  icons: {
    margin: "25px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "black",
    justifyContent: "space-between",
  },
};
