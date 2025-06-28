import React from "react";

export default function OrbitSkills() {
  const styles = {
    orbit: {
      position: "relative",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      animation: "rotate 20s linear infinite",
      margin: "50px auto",
    },
    centerText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "22px",
      fontWeight: "bold",
      color: "#E1000F",
      textAlign: "center",
    },
    iconBase: {
      position: "absolute",
      width: "50px",
      height: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      color: "white",
      fontSize: "24px",
    },
    icons: {
      html: {
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#e34c26",
      },
      css: {
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "#264de4",
      },
      js: {
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#f7df1e",
        color: "black",
      },
      python: {
        left: "0",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "#306998",
      },
      c: { top: "15%", left: "10%", backgroundColor: "#283593" },
      cpp: { top: "70%", left: "10%", backgroundColor: "#004482" },
      java: {
        top: "15%",
        right: "10%",
        border: "1px solid",
        borderColor: "#ea9008",
        backgroundColor: "#fdfdfd",
        color: "#007396",
      },
      react: {
        top: "70%",
        right: "10%",
        backgroundColor: "#61dafb",
        color: "#000",
      },
    },
    softSkillsSection: {
      marginTop: "60px",
      padding: "30px 20px",
      backgroundColor: "#f5f5f5",
      borderRadius: "10px",
      textAlign: "center",
    },
    title: {
      fontSize: "28px",
      marginBottom: "20px",
      color: "#E1000F",
      textAlign: "center",
    },
    skillsGrid: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "25px",
    },
    skillCard: {
      backgroundColor: "#fff",
      padding: "15px 20px",
      borderRadius: "10px",
      width: "150px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      fontSize: "14px",
      fontWeight: "500",
      color: "#333",
      fontFamily: "Poppins, sans-serif",
      textAlign: "center",
    },
    icon: {
      width: "32px",
      height: "32px",
      marginBottom: "8px",
    },
  };

  const mergeStyles = (base, extra) => Object.assign({}, base, extra);

  return (
    <>
      <style>
        {`
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .soft-skills-grid {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 25px;
          }

          @media (max-width: 768px) {
            .soft-skills-grid {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>

      {/* Orbit section */}
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <div id="skills">
          <div style={styles.orbit}>
            <div style={styles.centerText}>Coding Skills</div>

            <div style={mergeStyles(styles.iconBase, styles.icons.html)}>
              <i className="fab fa-html5" />
            </div>
            <div style={mergeStyles(styles.iconBase, styles.icons.css)}>
              <i className="fab fa-css3-alt" />
            </div>
            <div style={mergeStyles(styles.iconBase, styles.icons.js)}>
              <i className="fab fa-js" />
            </div>
            <div style={mergeStyles(styles.iconBase, styles.icons.python)}>
              <i className="fab fa-python" />
            </div>
            <div style={mergeStyles(styles.iconBase, styles.icons.c)}>C</div>
            <div style={mergeStyles(styles.iconBase, styles.icons.cpp)}>
              C++
            </div>
            <div style={mergeStyles(styles.iconBase, styles.icons.java)}>
              <i className="fab fa-java" />
            </div>
            <div style={mergeStyles(styles.iconBase, styles.icons.react)}>
              <i className="fab fa-react" />
            </div>
          </div>
        </div>
        <hr />
        {/* Soft Skills section */}
        <div style={styles.softSkillsSection}>
          <h2 style={styles.title}>Soft Skills</h2>
          <div className="soft-skills-grid">
            <div style={styles.skillCard}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2344/2344003.png"
                alt="Communication"
                style={styles.icon}
              />
              <p>Communication</p>
            </div>
            <div style={styles.skillCard}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3135/3135706.png"
                alt="Marketing"
                style={styles.icon}
              />
              <p>Marketing</p>
            </div>
            <div style={styles.skillCard}>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/egypt-9913651-8058628.png?f=webp&w=256"
                alt="Arabic"
                style={styles.icon}
              />
              <p>Arabic - Mother Tongue</p>
            </div>
            <div style={styles.skillCard}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/197/197374.png"
                alt="English"
                style={styles.icon}
              />
              <p>English - Fluent Speaking</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
