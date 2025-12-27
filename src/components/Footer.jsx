import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <h3>Basho</h3>
          <p>
            Handcrafted ceramic pieces inspired by tradition, simplicity,
            and mindful living.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: <span>BashobyShivangi.com</span></p>
          <p>Phone: <span>+91 98xxxxxxx</span></p>
          <p>Studio: <span>Surat, Guujarat, India</span></p>
        </div>

        <div className="footer-social">
          <h4>Follow</h4>
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="#">WhatsApp</a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Clay & Craft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
