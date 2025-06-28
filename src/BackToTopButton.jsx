import React, { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button onClick={scrollToTop} style={styles.button}>
        <i class="fa-solid fa-arrow-up"></i>
      </button>
    )
  );
}

const styles = {
  button: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    padding: "10px 15px",
    fontSize: "20px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#000091",
    color: "#fff",
    cursor: "pointer",
    zIndex: 1000,
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transition: "opacity 0.3s",
  },
};
