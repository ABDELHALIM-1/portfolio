import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CertificateCard({ image, title, link }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        View Certificate
      </a>
    </div>
  );
}

export default function CertificatesCarousel() {
  const certificates = [
    {
      image: "https://i.imgur.com/FrtCrua.png",
      title: "Harvard CS50P",
      link: "https://cs50.harvard.edu/certificates/54973350-91ac-4a90-973e-eb9ae078064e",
    },
    // {
    //   image: "رابط الصورة",
    //   title: "اسم الشهادة",
    //   link: "رابط الشهادة",
    // },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div
      style={{ padding: "40px", backgroundColor: "#E1000F" }}
      id="certificates"
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#fff" }}>
        My Certificates
      </h2>

      {certificates.length > 1 ? (
        <Slider {...settings}>
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              image={cert.image}
              title={cert.title}
              link={cert.link}
            />
          ))}
        </Slider>
      ) : (
        <CertificateCard
          image={certificates[0].image}
          title={certificates[0].title}
          link={certificates[0].link}
        />
      )}
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    margin: "10px",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    border: "none",
  },
  title: {
    fontSize: "18px",
    marginTop: "10px",
    color: "#333",
  },
  button: {
    marginTop: "10px",
    padding: "8px 15px",
    backgroundColor: "#093FB4",
    color: "white",
    borderRadius: "5px",
    textDecoration: "none",
    display: "inline-block",
  },
};
