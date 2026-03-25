function About() {
  return (
    <section id="About" style={styles.section}>
      <h2>About Me</h2>
      <p>
        SAP Certified ABAP Consultant with strong expertise in S/4HANA Public and Private Cloud, specializing in ABAP development, CDS Views, OData services, and end-to-end project delivery.
        Experienced across multiple modules such as MM, SD, FI, QM, CO, EWM, PP, and PPDS, implementing BAdIs, User-Exits, BAPIs, custom reports, and Fiori/UI5 solutions.
        Proven record of delivering E-Solution packages and successful go-live projects, combining technical proficiency with business process optimization to deliver high-performing, scalable SAP solutions.

      </p>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    textAlign: "center",
  },
};

export default About;