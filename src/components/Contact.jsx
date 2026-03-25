import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);
  return (
    <section id="contact" className="section">
      <div className="container contact-wrap">
        <div className="contact-card">
          <p className="eyebrow">Contact</p>

          <h2 className="section-title">Let’s work together</h2>

          <p>
            If you’re looking for an SAP ABAP developer for your project or team,
            feel free to reach out.
          </p>

          <div className="contact-links">
           <a href="mailto:brkyzdmr@gmail.com"
              className="btn btn-secondary icon-btn"
              onClick={(e) => {
                navigator.clipboard.writeText("brkyzdmr@gmail.com");
                setCopied(true);

                setTimeout(() => {
                  setCopied(false);
                }, 2000);
               }}
              >
              <MdEmail />
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/berkay-%C3%B6zdemir/"
              className="btn btn-secondary icon-btn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn 
            </a>
          </div>
        </div>
      </div>
      {copied && <div className="toast">Email copied!</div>}
    </section>
  );
}

export default Contact;