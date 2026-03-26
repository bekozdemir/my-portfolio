function Certificates() {
  const certificates = [
  {
    title: "SAP Certified - Back-End Developer - ABAP Cloud",
    issuer: "SAP",
    issued: "03/2026",
    expiry: "03/2027",
    badge: "/badges/sap-certified-back-end-developer-abap-cloud.png",
    link: "https://www.credly.com/badges/02c99c25-79de-4cff-a406-6dcaa00f3279/public_url",
  },
  {
    title: "Learning the Basics of ABAP Programming on SAP BTP",
    issuer: "SAP",
    issued: "02/2024",
    badge: "/badges/BTP.png",
    
  },
];

  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="section-title">Certificates</h2>

            <div className="cert-grid">
                {certificates.map((cert, index) => (
                <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-card"
                    key={index}
                    >
                    <div className="cert-header">
                        <img src={cert.badge} alt={cert.issuer} />
                    </div>

                    <h3>{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <div className="cert-dates">
                        <span>Issued: {cert.issued}</span>

                        {cert.expiry ? (
                            <span>Expires: {cert.expiry}</span>
                        ) : (
                            <span className="cert-no-expiry">No Expiration</span>
                        )}
                        </div>
                </a>
                ))}
            </div>
      </div>
    </section>
  );
}

export default Certificates;