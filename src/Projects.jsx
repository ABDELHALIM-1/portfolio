import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "SOON",
      videoUrl: "https://youtu.be/vecH7gHS9pE",
      github: "#",
    },
    {
      title: "SOON",
      videoUrl: "https://youtu.be/vecH7gHS9pE",
      github: "#",
    },
    {
      title: "SOON",
      videoUrl: "https://youtu.be/vecH7gHS9pE",
      github: "#",
    },
  ];

  const styles = {
    container: {
      padding: "50px 20px",
      textAlign: "center",
    },
    heading: {
      fontSize: "36px",
      marginBottom: "40px",
      fontFamily: "Poppins, sans-serif",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
    },
    card: {
      width: "300px",
      backgroundColor: "#fff",
      borderRadius: "15px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    },
    iframe: {
      width: "100%",
      height: "180px",
      border: "none",
    },
    content: {
      padding: "15px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "600",
      margin: "10px 0",
    },
    button: {
      marginTop: "10px",
      padding: "10px",
      borderRadius: "25px",
      border: "none",
      backgroundColor: "#093FB4",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container} id="projects">
      <h2 style={styles.heading}>My Projects</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <iframe
              src={project.videoUrl}
              title={project.title}
              style={styles.iframe}
              allowFullScreen
            ></iframe>
            <div style={styles.content}>
              <h3 style={styles.title}>{project.title}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={styles.button}
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
