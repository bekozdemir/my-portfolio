function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Berkay Özdemir</h2>
      <div>
        <a href="#about">About</a> |{" "}
        <a href="#projects">Projects</a> |{" "}
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    borderBottom: "1px solid #eee",
  },
};

export default Navbar;