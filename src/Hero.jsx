import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Desktop App Developer",
        "FullStack Developer",
        "Frontend Developer",
        "Backend Developer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div style={{ width: "100%", backgroundColor: "white" }}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap-reverse",
            gap: "30px",
            padding: "40px 30px",
          }}
        >
          <div style={{ color: "#000000", maxWidth: "600px" }}>
            <h4
              style={{
                fontSize: "28px",
                padding: "10px",
              }}
            >
              Hello, My name is{" "}
              <span style={{ color: "#E1000F", fontFamily: "serif" }}>
                Abdelhalim Yasser
              </span>
            </h4>
            <h1 style={{ marginTop: "20px", fontSize: "30px" }}>
              I'm <span ref={typedRef} style={{ color: "#E1000F" }}></span>
            </h1>
            <p style={{ marginTop: "15px", fontSize: "18px" }}>
              Experienced full-stack developer with expertise in web, desktop
              applications and some Flutter experience.
            </p>
            <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
              <a
                href="/cv.pdf"
                download="Abdelhalim_Yasser_CV.pdf"
                style={{
                  padding: "10px 20px",
                  border: "3px solid #E1000F",
                  color: "#E1000F",
                  borderRadius: "50px",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "0.3s",
                }}
              >
                Download CV
              </a>
            </div>
          </div>

          <img
            src="https://i.imgur.com/yfO0dh4.jpeg"
            alt="my personal img"
            style={{
              width: "350px",
              height: "300px",
              borderRadius: "50%",
              border: "5px solid #000000",
            }}
          />
        </div>
      </div>
    </div>
  );
}
