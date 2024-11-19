import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
       <div style={styles.card}>
        <img src={"/bohdan_duda.jpg"} alt="Bohdan Duda" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Bohdan Duda</h2>
          <p style={styles.position}>QA Engineer</p>
        </div>
      </div>

      <div style={styles.card}>
        <img src={"/roman_kach.jpg"} alt="Roman Kachanovskyi" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Roman Kachanovskyi</h2>
          <p style={styles.position}>Business Analyst</p>
        </div>
      </div>

      <div style={styles.card}>
        <img src={"/maksym_kapitaniuk.jpg"} alt="Maksym Kapitaniuk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Maksym Kapitaniuk</h2>
          <p style={styles.position}>Fullstack Developer</p>
        </div>
      </div>

      <div style={styles.card}>
        <img src={"/viktor_ishchyshyn.jpg"} alt="Viktor Ishchyshyn" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Viktor Ishchyshyn</h2>
          <p style={styles.position}>UI/UX designer</p>
        </div>
      </div>
   
      <div style={styles.card}>
        <img src={"/roman_koval.png"} alt="Roman Koval" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Roman Koval</h2>
          <p style={styles.position}>Product manager</p>
        </div>
      </div>

    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
